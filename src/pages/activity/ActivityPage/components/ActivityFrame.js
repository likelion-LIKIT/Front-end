// 작성자 : 이수화

import { useState, useLayoutEffect } from "react";
import "../styles/ActivityFrame.css";
import ActivityCard from "./ActivityCard";
import { activityData as data } from "../constant/activityData";

function useWindowSize() {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const ActivityFrame = () => {
  // 필요 변수

  // 현재 화면 width
  const windowWidth = useWindowSize();
  // 원본 데이터
  const originalData = data;
  // 원본 데이터 길이
  const originalDataLength = originalData.length;
  // 추가할 데이터 갯수
  const addCnt = 4;
  // 보여질 데이터
  const showData = makeShowData();
  // card 하나의 넓이
  const cardWidth = getCardWidth();
  // 현재 인덱스
  const [currentIdx, setCurrentIdx] = useState(addCnt - 2);
  // transition 설정
  const transitionTime = 500;
  const style = `transform ${transitionTime}ms ease 0s`;
  const [transitionStyle, setTransitionStyle] = useState(style);

  // 원본 데이터 -> 보여줄 데이터 가공
  function makeShowData() {
    const frontData = originalData.slice(0, addCnt);
    const rearData = originalData.slice(-1 * addCnt);
    return [...rearData, ...originalData, ...frontData];
  }

  // 카드 하나 넓이 지정하기
  function getCardWidth() {
    // 카드 하나 넓이 : 일단 윈도우 넓이의 20%로 지정
    let scrollWidth = 17;
    let width = parseInt((windowWidth - 140 - scrollWidth) / 5);
    if (width < 100) width = 100; // 최소 100px로 고정
    return width + 1;
  }

  const replaceSlide = (index) => {
    setTimeout(() => {
      setTransitionStyle("");
      setCurrentIdx(index);
    }, transitionTime);
  };

  const moveLeft = () => {
    let nextIdx = currentIdx - 1;
    setCurrentIdx(nextIdx);
    if (nextIdx - addCnt < 0) {
      nextIdx += originalDataLength;
      replaceSlide(nextIdx);
    }
    setTransitionStyle(style);
  };

  const moveRight = () => {
    let nextIdx = currentIdx + 1;
    setCurrentIdx(nextIdx);
    if (nextIdx - addCnt >= originalDataLength - 1) {
      nextIdx -= originalDataLength;
      replaceSlide(nextIdx);
    }
    setTransitionStyle(style);
  };

  const updateItemIdx = (index) => {
    index -= addCnt;
    if (index < 0) {
      index += originalDataLength;
    } else if (index >= originalDataLength) {
      index -= originalDataLength;
    }
    return index;
  };

  return (
    <div className="ActivityFrame">
      {/* 아이템 전체 리스트를 감쌀 컨테이너 */}
      <div
        className="activityContainer"
        style={{
          width: `${cardWidth * showData.length}px`,
          transform: `translateX(${-1 * cardWidth * currentIdx}px)`,
          transition: transitionStyle,
        }}
      >
        {
          // 아이템 전체 리스트들
          showData.map((data, idx) => {
            const udtIdx = updateItemIdx(idx);
            return (
              <ActivityCard
                key={idx}
                idx={idx}
                data={data}
                width={cardWidth}
                cardIdx={udtIdx}
                currentIdx={currentIdx}
                totalLen={originalDataLength}
              />
            );
          })
        }
      </div>
      <div className="carouoselLeftBtn" onClick={moveLeft}>
        <img src="/images/carousel_left_button.png" alt="왼쪽 버튼" />
      </div>
      <div className="carouoselRightBtn" onClick={moveRight}>
        <img src="/images/carousel_right_button.png" alt="오른쪽 버튼" />
      </div>
    </div>
  );
};

export default ActivityFrame;

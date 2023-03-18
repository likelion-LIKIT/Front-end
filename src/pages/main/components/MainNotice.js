// 작성자: 구현우

import NoticeUtils from "../utils/NoticeUtils";

import "../styles/MainNotice.css";

import { useState, useRef, useEffect } from "react";

const MainNotice = () => {
  const [noticeState, setNoticeState] = useState(NoticeUtils.setNotice());

  const gradientTop = useRef();
  const gradientBottom = useRef();

  useEffect(() => {
    setGradient();
  }, []);

  const showNotice = () => {
    const answer = [];

    noticeState.forEach((notice, index) => {
      answer.push(
        <div key={index} className="notice_contents">
          <div className="notice_header">
            <span>{notice.title}</span>
            <span>{notice.date}</span>
          </div>
          <div>{notice.contents}</div>
        </div>
      );
    });

    return answer;
  };

  const setGradient = () => {
    const noticeBody = document.getElementById("notice_body");

    if (Math.floor(noticeBody.scrollTop) === 0) {
      gradientTop.current.style = "background: linear-gradient(transparent, transparent);";
    } else {
      gradientTop.current.style = "background: linear-gradient(white, transparent);";
    }

    if (
      Math.floor(noticeBody.scrollTop + noticeBody.clientHeight) ===
      Math.floor(noticeBody.scrollHeight)
    ) {
      gradientBottom.current.style = "background: linear-gradient(transparent, transparent);";
    } else {
      gradientBottom.current.style = "background: linear-gradient(to top, white, transparent);";
    }
  };

  return (
    <div id="MainNotice">
      <div id="notice_title">
        <span>
          <span>📢</span>
          <span>소식</span>
        </span>
        <span>
          <button>전체 공지</button>
          <button>과제 공지</button>
        </span>
      </div>
      <div ref={gradientTop} className="notice_gradient_top"></div>
      <div onScroll={() => setGradient()} id="notice_body">
        {showNotice()}
      </div>
      <div ref={gradientBottom} className="notice_gradient_bottom"></div>
    </div>
  );
};

export default MainNotice;

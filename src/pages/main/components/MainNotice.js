// 작성자: 구현우

import NoticeUtils from "../utils/NoticeUtils";

import "../styles/MainNotice.css";

import { useEffect, useRef, useState } from "react";

const MainNotice = ({ height }) => {
  const [noticeState, setNoticeState] = useState(NoticeUtils.setNotice());

  const titleRef = useRef();
  const bodyRef = useRef();

  useEffect(() => {
    bodyRef.current.style = `height: ${height - titleRef.current.offsetHeight - 60}px`;
  }, [height]);

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

  return (
    <div id="MainNotice">
      <div ref={titleRef} id="notice_title">
        <span>
          <span>📢</span>
          <span>소식</span>
        </span>
        <span>
          <button>전체 공지</button>
          <button>과제 공지</button>
        </span>
      </div>
      <div ref={bodyRef} id="notice_body">
        {showNotice()}
      </div>
    </div>
  );
};

export default MainNotice;

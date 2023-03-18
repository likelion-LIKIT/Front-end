// 작성자 : 이수화

import "../styles/Preview.css";
import React from "react";

const Preview = ({ title, contents }) => {
  // textArea 미리보기 줄바꿈 기능
  const processedTitle = () => {
    if (!title) return;
    return title.split("\n").map((text, idx) => {
      return (
        <span key={idx}>
          {text}
          <br />
        </span>
      );
    });
  };

  // contents 미리보기 데이터 가공 함수
  const processedContents = () => {
    if (!contents) return;
    // 문자열 => html로 처리
    return <div dangerouslySetInnerHTML={{ __html: contents }}></div>;
  };

  return (
    <div className="Preview">
      <div className="previewTitle">
        <span>{processedTitle(title)}</span>
      </div>
      <div className="previewContents">{processedContents(contents)}</div>
    </div>
  );
};

export default Preview;

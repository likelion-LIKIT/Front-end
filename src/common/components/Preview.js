// 작성자 : 이수화

import "../styles/Preview.css";

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

  return (
    <div className="Preview">
      <div className="previewTitle">
        <span>{processedTitle(title)}</span>
      </div>
      <div className="previewContents">
        <span>{contents}</span>
      </div>
    </div>
  );
};

export default Preview;

// 작성자 : 이수화

import { useRef } from "react";
import "../styles/FormTitle.css";

const FormTitle = ({ page, setTitle }) => {
  const textAreaRef = useRef();

  const handleResizeHeight = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="FormTitle">
      <textarea
        rows={1}
        placeholder="제목을 입력하세요"
        ref={textAreaRef}
        onChange={(e) => {
          handleChange(e);
          handleResizeHeight();
        }}
      />
    </div>
  );
};

export default FormTitle;

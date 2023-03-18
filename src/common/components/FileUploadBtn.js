// 작성자 : 이수화

import "../styles/FileUploadBtn.css";
import { useRef } from "react";

const FileUploadBtn = ({ file, setFile, imgCnt }) => {
  const selectFile = useRef("");

  // 업로드 하는 함수
  const handleFileUpload = (e) => {
    const fileArr = e.target.files;
    if (fileArr.length > imgCnt) {
      alert(`사진 첨부는 ${imgCnt}개 까지 가능합니다.`);
      return;
    }

    setFile([...fileArr]);
  };

  return (
    <div className="FileUploadBtn">
      <input
        type="file"
        style={{ display: "none" }}
        multiple
        ref={selectFile}
        accept="image/*, text/plain, .pdf, "
        onChange={handleFileUpload}
      />
      <div className="fileUploader" onClick={() => selectFile.current.click()}>
        <img src="/images/file_icon.png" alt="파일 아이콘" />
        <div>
          드래그해서 파일을 업로드
          <br />
          하거나 <span id="empathisText">직접 추가</span>하세요
        </div>
      </div>
    </div>
  );
};

export default FileUploadBtn;

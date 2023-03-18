// 작성자 : 이수화

import { useState, useRef } from "react";
import "../styles/NotionFormModal.css";
import Modal from "../../../../common/components/Modal";
import { category } from "../constant/CategoryData";
import FileListBox from "../../../../common/components/FileListBox";
import FileUploadBtn from "../../../../common/components/FileUploadBtn";

const NotionFormModal = ({ show, onHide }) => {
  const categoryBtnRef = useRef([]);
  const [clickedCategory, setClickedCategory] = useState(-1); // 선택된 카테고리 인덱스
  const [file, setFile] = useState([]);
  const [showEssentialText, setShowEssentialText] = useState(false);

  const handleWrite = () => {
    // 카테고리 미입력 예외처리
    if (clickedCategory === -1) {
      setShowEssentialText(true);
      return;
    } else {
      /**
       * @todo: 글쓰기 API 연결
       */
      // 현재 눌린 카테고리 : category[clickedCategory].category
      // 파일 객체 배열 : file
    }
  };

  const makeCategoryBtns = () => {
    return category.map((ele, idx) => {
      return (
        <div
          key={idx}
          style={{ color: `${ele.color}` }}
          ref={(el) => (categoryBtnRef.current[idx] = el)}
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={() => handleMouseLeave(idx)}
          onClick={() => handleClick(idx)}
        >
          {ele.category}
        </div>
      );
    });
  };

  const handleClick = (index) => {
    setClickedCategory(index);
    setShowEssentialText(false);

    for (let i = 0; i < 4; i++) {
      if (i === index) {
        categoryBtnRef.current[i].style.color = "white";
        categoryBtnRef.current[
          i
        ].style.backgroundColor = `${category[i].color}`;
      } else {
        categoryBtnRef.current[i].style.color = `${category[i].color}`;
        categoryBtnRef.current[i].style.backgroundColor =
          "rgba(200, 200, 200, 0.1)";
      }
    }
  };

  const handleMouseEnter = (index) => {
    categoryBtnRef.current[index].style.backgroundColor = `${category[index].color}`;
    categoryBtnRef.current[index].style.color = "white";
  };

  const handleMouseLeave = (index) => {
    // 눌린게 없음
    if (index !== clickedCategory) {
      categoryBtnRef.current[index].style.color = `${category[index].color}`;
      categoryBtnRef.current[index].style.backgroundColor = "white";
    }
  };

  return (
    <div className="NotionFormModal">
      <Modal show={show} onHide={onHide} width={"600px"} height={"600px"}>
        {show && (
          <div className="notionModalBody">
            <div className="notionModalHeader">
              <strong>전체공지</strong>
              <span onClick={onHide}>닫기</span>
            </div>
            <div className="notionModalCategory">
              <strong>
                카테고리를 선택하세요<span> * </span>
              </strong>
              {showEssentialText && (
                <span className="show">카테고리를 선택해주세요.</span>
              )}
              <div className="notionCategoryBtns">{makeCategoryBtns()}</div>
            </div>
            <div className="notionModalFileUploader">
              <strong>파일첨부</strong>
              <div className="notionModalFileUploaderBox">
                <FileUploadBtn file={file} setFile={setFile} imgCnt={10} />
                <FileListBox fileList={file} setFile={setFile} />
              </div>
            </div>
            <div className="notionModalBtns">
              <button id="cancel" onClick={onHide}>
                취소
              </button>
              <button id="write" onClick={handleWrite}>
                작성
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default NotionFormModal;

// 작성자 : 이수화

import { useState, useRef } from "react";
import "../styles/AssignmentUploadModal.css";
import Modal from "../../../../common/components/Modal";
import FileListBox from "../../../../common/components/FileListBox";
import FileUploadBtn from "../../../../common/components/FileUploadBtn";
import { trackData as track } from '../../constant/trackData';

const AssignmentUploadModal = ({ show, onHide }) => {
  const categoryBtnRef = useRef([]);
  const [clickedTrack, setClickedTrack] = useState(-1); // 선택된 트랙 인덱스
  const [month, setMonth] = useState(null);
  const [file, setFile] = useState([]);
  const [errorText, setErrorText] = useState({
    month: false,
    track: false
  });

  const changeInput = (e) => {
    setErrorText((prev) => {
        return { ...prev, month: false }
    });
    setMonth(e.target.value);
  }

  const handleWrite = () => {
    // 트랙 및 주차 미입력 예외처리
    if(clickedTrack === -1 && month === null) {
        setErrorText((prev) => {
            return { ...prev,  month: true, track: true }
        })
        return;
    }

      if(clickedTrack === -1) {
        setErrorText((prev) => {
            return { ...prev, track: true }
        })

        if(isInvalid()) {
            setErrorText((prev) => {
                return { ...prev, month: true }
            })
        }
        return;
      }

      if(month === null) {
        setErrorText((prev) => {
            return { ...prev, month: true }
        })
        return;
      }

      if(isInvalid()) {
        setErrorText((prev) => {
            return { ...prev, month: true }
        })
        return;
      }

      /**
       * @todo: 글쓰기 API 연결
       */
      // month: 선택한 차수
      // clickedTrackIndex : 선택한 트랙 인덱스 
      // file : 파일 객체 배열 
    
  };

  const isInvalid = () => {
    return isNaN(month) === true || String(month).length > 2;
  }

  const makeTrackBtns = () => {
    return track.map((ele, idx) => {
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
    setClickedTrack(index);
    setErrorText((prev) => {
        return { ...prev, track: false }
    });

    for (let i = 0; i < 4; i++) {
      if (i === index) {
        categoryBtnRef.current[i].style.color = "white";
        categoryBtnRef.current[i].style.backgroundColor = `${track[i].color}`;
      } else {
        categoryBtnRef.current[i].style.color = `${track[i].color}`;
        categoryBtnRef.current[i].style.backgroundColor =
          "rgba(200, 200, 200, 0.1)";
      }
    }
  };

  const handleMouseEnter = (index) => {
    categoryBtnRef.current[index].style.backgroundColor = `${track[index].color}`;
    categoryBtnRef.current[index].style.color = "white";
  };

  const handleMouseLeave = (index) => {
    // 눌린게 없음
    if (index !== clickedTrack) {
      categoryBtnRef.current[index].style.color = `${track[index].color}`;
      categoryBtnRef.current[index].style.backgroundColor = "white";
    }
  };

  return (
    <div className="AssignmentUploadModal">
      <Modal show={show} onHide={onHide} width={"600px"} height={"700px"}>
        {show && (
          <div className="assignmentModalBody">
            <div className="assignmentModalHeader">
              <strong>과제공지</strong>
              <span onClick={onHide}>닫기</span>
            </div>
            <div className="assignmentModalMonth">
              <strong>
                주차를 입력해 주세요<span> * </span>
              </strong>
              {errorText.month && (
                <span className="show">2자리 이내의 숫자 형태로 입력해주세요.</span>
              )}
              <div className="assignmnetMonthInput">
                <input placeholder='ex) 3' onChange={changeInput} />
              </div>
            </div>
            <div className="assignmentModalTrack">
              <strong>
                트랙을 선택하세요<span> * </span>
              </strong>
              {errorText.track && (
                <span className="show">트랙을 선택해주세요.</span>
              )}
              <div className="assignmentTrackBtns">{makeTrackBtns()}</div>
            </div>
            <div className="assignmentModalFileUploader">
              <strong>파일첨부</strong>
              <div className="assignmentModalFileUploaderBox">
                <FileUploadBtn file={file} setFile={setFile} imgCnt={10} />
                <FileListBox fileList={file} setFile={setFile} />
              </div>
            </div>
            <div className="assignmentModalBtns">
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

export default AssignmentUploadModal;

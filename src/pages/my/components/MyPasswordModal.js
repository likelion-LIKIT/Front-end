// 작성자: 구현우

import Modal from "../../../common/components/Modal";
import MyPasswordUtils from "../utils/MyPasswordUtils";

import "../styles/MyPasswordModal.css";

import { useEffect, useRef, useState } from "react";

const MyPasswordModal = ({ show, onHide, width, height, setUpdatePasswordModal }) => {
  const [currentPwd, setCurrentPwd] = useState("");

  const currentInputRef = useRef();
  const nextBtnRef = useRef();

  useEffect(() => {
    if (show) currentInputRef.current.focus();
    else setCurrentPwd("");
  }, [show]);

  useEffect(() => {
    if (currentPwd.length >= 8) {
      nextBtnRef.current.style = "opacity: 1; pointer-events: all; cursor: pointer;";
    } else {
      nextBtnRef.current.style = "opacity: 0.4; pointer-events: none;";
    }
  }, [currentPwd]);

  const writeCurrentPwd = (e) => {
    setCurrentPwd(e.target.value);
  };

  const setNextModal = () => {
    onHide();

    setTimeout(() => {
      setUpdatePasswordModal(true);
    }, 100);
  };

  const checkCurrentPwd = () => {
    const promiseCurrentPwd = MyPasswordUtils.checkCurrentPwd(currentPwd);

    promiseCurrentPwd.then((answer) => {
      if (answer) {
        setNextModal();
      } else {
        window.alert("비밀번호가 맞지 않습니다. 다시 확인해 주세요.");
        setCurrentPwd("");
        currentInputRef.current.focus();
      }
    });
  };

  return (
    <div className={["none_MyPasswordModal", show && "MyPasswordModal"].join(" ")}>
      <Modal show={show} onHide={onHide} width={width} height={height}>
        <div id="mypasswordmodal">
          <div id="mypasswordmodal_header">
            <span>
              <span>🔐</span>
              <span>비밀번호 변경</span>
            </span>
            <button onClick={() => onHide()}>닫기</button>
          </div>
          <div id="mypasswordmodal_body">
            <div>현재 비밀번호</div>
            <input
              ref={currentInputRef}
              type="password"
              value={currentPwd}
              onChange={writeCurrentPwd}
            />
          </div>
          <div id="mypasswordmodal_footer">
            <button ref={nextBtnRef} onClick={() => checkCurrentPwd()}>
              다음
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MyPasswordModal;

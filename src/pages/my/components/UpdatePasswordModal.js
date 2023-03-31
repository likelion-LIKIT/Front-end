// 작성자: 구현우

import Modal from "../../../common/components/Modal";
import MyPasswordUtils from "../utils/MyPasswordUtils";

import "../styles/UpdatePasswordModal.css";
import "../styles/MyPasswordModal.css";

import { useEffect, useRef, useState } from "react";

const UpdatePasswordModal = ({ show, onHide, width, height }) => {
  const [newPassword, setNewPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [passState, setPassState] = useState({
    new: false,
    check: false,
  });
  const [compareText, setCompareText] = useState("하지 않습니다.");

  const newPwdInputRef = useRef();
  const newPwdCheckInputRef = useRef();
  const newPhrasesRef = useRef();
  const checkPhrasesRef = useRef();
  const updateBtnRef = useRef();

  useEffect(() => {
    if (show) newPwdInputRef.current.focus();
  }, [show]);

  useEffect(() => {
    if (newPassword === "") {
      newPhrasesRef.current.style = "color: rgb(173, 173, 173);";
    } else {
      if (MyPasswordUtils.checkRegExp(newPassword)) {
        newPhrasesRef.current.style = "color: green;";
        setPassState({ ...passState, new: true });
      } else {
        newPhrasesRef.current.style = "color: red;";
        setPassState({ ...passState, new: false });
      }
    }
  }, [newPassword]);

  useEffect(() => {
    if (checkPassword === "") {
      checkPhrasesRef.current.style = "color: rgb(173, 173, 173);";
    } else {
      if (checkPassword === newPassword) {
        checkPhrasesRef.current.style = "color: green;";
        setPassState({ ...passState, check: true });
        setCompareText("합니다.");
      } else {
        checkPhrasesRef.current.style = "color: red;";
        setPassState({ ...passState, check: false });
        setCompareText("하지 않습니다.");
      }
    }
  }, [checkPassword]);

  useEffect(() => {
    if (passState.new && passState.check) {
      updateBtnRef.current.style = "opacity: 1; pointer-events: all; cursor: pointer;";
    } else {
      updateBtnRef.current.style = "opacity: 0.4; pointer-events: none;";
    }
  }, [passState]);

  const writeNewPwd = (e, status) => {
    if (status === "new") {
      setNewPassword(e.target.value);
    } else {
      setCheckPassword(e.target.value);
    }
  };

  const updatePwd = () => {
    if (window.confirm("비밀번호를 변경하시겠습니까?")) {
      if (MyPasswordUtils.updatePwd(newPassword)) {
      } else {
        window.alert("비밀번호 변경이 실패하였습니다. 다시 시도하여 주세요.");
      }
    }
  };

  return (
    <div className={["none_UpdatePasswordModal", show && "UpdatePasswordModal"].join(" ")}>
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
            <div>새 비밀번호</div>
            <input
              ref={newPwdInputRef}
              value={newPassword}
              onChange={(e) => writeNewPwd(e, "new")}
              type="password"
            />
            <div className="password_phrases" ref={newPhrasesRef}>
              8~15자리 영문, 숫자, 특수문자가 들어간 조합
            </div>
          </div>
          <div id="mypasswordmodal_body" className="updatepassworldmodal_body">
            <div>새 비밀번호 확인</div>
            <input
              ref={newPwdCheckInputRef}
              value={checkPassword}
              onChange={(e) => writeNewPwd(e, "check")}
              type="password"
            />
            <div className="password_phrases" ref={checkPhrasesRef}>
              비밀번호가 일치{compareText}
            </div>
          </div>
          <div id="mypasswordmodal_footer">
            <button ref={updateBtnRef} onClick={() => updatePwd()}>
              변경
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UpdatePasswordModal;

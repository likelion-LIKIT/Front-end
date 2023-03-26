// 작성자: 구현우

import LoginInput from "./LoginInput";
import LoginUtils from "../utils/LoginUtils";

import { useState, useEffect } from "react";

import "../styles/LoginForm.css";

const LoginForm = ({ successLogin, setSuccessLogin }) => {
  const [showForm, setShowForm] = useState(false);
  const [inputData, setInputData] = useState({
    id: "",
    pw: "",
  });
  const [buttonState, setButtonState] = useState(false);
  const [saveId, setSaveId] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowForm(true);
    }, 600);
  }, []);

  useEffect(() => {
    if (successLogin) {
      setTimeout(() => {
        setShowForm(false);
      }, 100);
    }
  }, [successLogin]);

  useEffect(() => {
    if (inputData.id === "" || inputData.pw === "") setButtonState(false);
    else setButtonState(true);
  }, [inputData]);

  const changeSaveId = (e) => {
    setSaveId(e.target.checked);
  };

  const clickLogin = () => {
    if (!buttonState) return;
    if (LoginUtils.checkInput(saveId, inputData, setSuccessLogin) === "wrongId") {
      setInputData({ ...inputData, id: "" });
    }
  };

  return (
    <div className={["init_form", showForm && "LoginForm"].join(" ")}>
      <div className="loginform_top">로그인</div>
      <div className="loginform_input">
        <LoginInput inputData={inputData} setInputData={setInputData} clickLogin={clickLogin} />
      </div>
      <div className="loginform_bottom">
        <button
          className={["init_login_button", buttonState && "login_button"].join(" ")}
          onClick={() => clickLogin()}
        >
          로그인
        </button>
        <div>
          <input type="checkBox" checked={saveId} onChange={changeSaveId}></input>
          <span>자동 로그인</span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

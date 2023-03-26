// 작성자: 구현우

import ExceptionUtils from "./ExceptionUtils";
import LoginAPI from "../api/LoginAPI";

const LoginUtils = {
  checkInput(saveIdState, inputData, setSuccessLogin) {
    if (ExceptionUtils.checkException(inputData.id)) {
      this.sendInputData(saveIdState, inputData, setSuccessLogin);
      return;
    }
    this.wrongId();
    return "wrongId";
  },

  sendInputData(saveIdState, inputData, setSuccessLogin) {
    LoginAPI.tryLogin(saveIdState, inputData, setSuccessLogin);
  },

  wrongId() {
    alert("아이디 형식이 올바르지 않습니다.");
  },
};

export default LoginUtils;

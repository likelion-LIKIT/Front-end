// 작성자: 구현우

import LoginAPI from "../../login/api/LoginAPI";
import MyAPI from "../api/MyAPI";

const MyPasswordUtils = {
  checkCurrentPwd(password) {
    const id = localStorage.getItem("LIKIT-id")
      ? localStorage.getItem("LIKIT-id")
      : sessionStorage.getItem("LIKIT-id");

    return LoginAPI.checkCurrentPwd(id, password);
  },

  checkRegExp(password) {
    const regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]).{8,15}$/;

    if (regExp.test(password)) return true;
    else return false;
  },

  updatePwd(password) {
    // MyAPI.updateUserInfo();
    return false;
  },
};

export default MyPasswordUtils;

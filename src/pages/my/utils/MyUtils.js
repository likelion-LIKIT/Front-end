// 작성자: 구현우

import MyAPI from "../api/MyAPI";

const MyUtils = {
  checkIsMe(pageId) {
    if (
      pageId === localStorage.getItem("LIKIT-id") ||
      pageId === sessionStorage.getItem("LIKIT-id")
    )
      return true;
    return false;
  },

  setUserInfo(pageId) {
    return MyAPI.getUserInfo(pageId);
  },

  updateUserInfro(key, value) {
    MyAPI.updateUserInfo(key, value);
  },

  updateTechStack(updateTech, setUserInfo, userInfo) {
    MyAPI.updateUserInfo("tech_stack", updateTech, setUserInfo, userInfo);
  },
};

export default MyUtils;

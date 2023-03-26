// 작성자: 구현우

import axios from "axios";

const LoginAPI = {
  tryLogin(saveIdState, inputData, setSuccessLogin) {
    axios
      .post(`${process.env.REACT_APP_API_URL}/member/login`, {
        studentId: inputData.id,
        password: inputData.pw,
      })
      .then((res) => {
        const data = res.data;

        this.saveId(saveIdState, data, inputData.id);

        setSuccessLogin(true);
      })
      .catch((err) => {
        window.alert("이이디 혹은 비밀번호가 올바르지 않습니다.");
      });
  },

  saveId(saveIdState, data, id) {
    if (saveIdState) {
      localStorage.setItem("LIKIT-accessToken", data.accessToken);
      localStorage.setItem("LIKIT-refreshToken", data.refreshToken);
      localStorage.setItem("LIKIT-id", id);
    } else {
      sessionStorage.setItem("LIKIT-accessToken", data.accessToken);
      sessionStorage.setItem("LIKIT-refreshToken", data.refreshToken);
      sessionStorage.setItem("LIKIT-id", id);
    }
  },
};

export default LoginAPI;

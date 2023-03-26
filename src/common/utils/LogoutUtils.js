// 작성자 : 이수화

export function handleLogout(setIsLogin) {
  if (window.confirm("로그아웃 하시겠습니까?\n자동로그인 정보도 사라집니다.")) {
    if (localStorage.getItem("LIKIT-accessToken") || localStorage.getItem("LIKIT-refreshToken")) {
      localStorage.removeItem("LIKIT-accessToken");
      localStorage.removeItem("LIKIT-refreshToken");
      localStorage.removeItem("LIKIT-id");
    } else {
      sessionStorage.removeItem("LIKIT-accessToken");
      sessionStorage.removeItem("LIKIT-refreshToken");
      sessionStorage.removeItem("LIKIT-id");
    }

    setIsLogin(false);
  }
}

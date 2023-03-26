// 작성자 : 이수화
import { useState, useEffect } from "react";

import Link from "./Link";
import { handleLogout } from "../utils/LogoutUtils";
import { headerMenu } from "../constant/Header";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ page }) => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);

  const makeNav = () => {
    return headerMenu.map((item, idx) => (
      <div key={idx} className={item[1] === page ? "clicked" : ""}>
        <Link key={idx} to={`/${item[1]}`}>
          {item[0]}
        </Link>
      </div>
    ));
  };

  const logout = () => {
    handleLogout(setIsLogin);
    navigate(`/`);
  };

  const makeInfo = () => {
    return isLogin ? (
      <>
        <div onClick={() => logout()}>Logout</div>
        <Link
          to={`/my/${
            localStorage.getItem("LIKIT-id")
              ? localStorage.getItem("LIKIT-id")
              : sessionStorage.getItem("LIKIT-id")
          }`}
        >
          My
        </Link>
      </>
    ) : (
      <Link to="/login">Login</Link>
    );
  };

  useEffect(() => {
    if (
      localStorage.getItem("LIKIT-accessToken") ||
      sessionStorage.getItem("LIKIT-accessToken") ||
      localStorage.getItem("LIKIT-refreshToken") ||
      sessionStorage.getItem("LIKIT-refreshToken")
    ) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div className="Header">
      <div className="headerLogo">
        <Link to="/">LIKIT</Link>
      </div>
      <div className="headerNav">{makeNav()}</div>
      <div className="headerInfo">{makeInfo()}</div>
    </div>
  );
};

export default Header;

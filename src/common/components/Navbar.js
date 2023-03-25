// 작성자 : 이수화

import { useEffect, useState } from "react";

import "../styles/Navbar.css";
import { notShowPage, category, introduceSubCategory, noticeSubCategory, activitySubCategory} from "../constant/Navbar";
import Link from "./Link";

const Navbar = ({ page }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const handleMouse = {
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false),
  };

  const setMainCategory = () => {
    if(introduceSubCategory.includes(page)) {
      return 'introduce';
    } else if(noticeSubCategory.includes(page)) {
      return 'notice';
    } else if(activitySubCategory.includes(page)) {
      return 'activity';
    }
  }

  const mainCategory = setMainCategory();

  const makeCategory = () => {
    return Object.entries(category[mainCategory].category).map((data, idx) => (
      <Link key={idx} to={`/${data[0]}`} page={page}>
        &nbsp;&nbsp;&nbsp;{data[1]}
      </Link>
    ));
  };

  const makeNavBar = () => {
    if (category[mainCategory]) {
      return (
        <>
          <div className="navTitle">
            &nbsp;&nbsp;&nbsp;{category[mainCategory].title}
          </div>
          <div className="navCategory">{makeCategory()}</div>
        </>
      );
    }
  };

  useEffect(() => {
    if (notShowPage.includes(page)) {
      setShowNavbar(false);
    }
  }, [page]);

  return (
    <div className="Navbar">
      {showNavbar && (
        <>
          <div className="navBtn" {...handleMouse}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Navbar_Arrow.png`}
              alt="nav button icon"
            />
          </div>
          <div
            className={["navMenuBar", isHovering && "showNav"].join(" ")}
            {...handleMouse}
          >
            {makeNavBar()}
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;

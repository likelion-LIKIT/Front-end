// 작성자 : 이수화

import "../styles/Title.css";
import { title, showWriteBtnPage } from "../constant/Title";
import { useNavigate } from "react-router-dom";

const Title = (props) => {
  const { page } = props;
  const navigate = useNavigate();

  return (
    <div className="Title">
      <div className="titleBox">
        <div className="titleParent">
          <div className="titleChild">{title[`${page}`][0]}</div>
        </div>
        <div className="subtitleParent">
          <div className="subtitleChild">{title[`${page}`][1]}</div>
        </div>
      </div>
      {showWriteBtnPage.includes(page) ? (
        <div className="writeBtn">
          <button onClick={() => navigate(`/${page}/upload`)}>작성하기</button>
        </div>
      ) : null}
    </div>
  );
};

export default Title;

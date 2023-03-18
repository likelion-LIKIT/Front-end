// 작성자 : 이수화

import "../styles/FormHeader.css";
import { formText } from "../constant/Form";
import { useNavigate } from "react-router-dom";

const FormHeader = ({ page, setShowModal }) => {
  const navigate = useNavigate();

  const handleQuit = () => {
    /**
     * @todo: 나가기 전 모달 추가
     */

    navigate(`/${page}`);
  };

  const handleWrite = () => {
    /**
     * @todo: 글 작성 API 연결
     * @todo: 작성 확인 모달 추가
     */
    setShowModal(true);
  };

  return (
    <div className="FormHeader">
      <div onClick={handleQuit}>나가기</div>
      <div>{formText[`${page}`]} 작성하기</div>
      <div onClick={handleWrite}>작성하기</div>
    </div>
  );
};

export default FormHeader;

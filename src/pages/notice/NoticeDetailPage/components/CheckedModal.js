// 작성자 : 이수화

import { useEffect } from "react";
import "../styles/CheckedModal.css";
import Modal from "../../../../common/components/Modal";
import { checkedList } from "../../NoticePage/constant/noticeData";

const CheckedModal = ({ show, onHide }) => {
  const data = checkedList;

  const getCheckedList = () => {
    /**
     * todo: 확인한 사람 리스트 통신 API 구현 필요
     */
  };

  useEffect(() => {
    getCheckedList();
  }, []);

  return (
    <Modal show={show} onHide={onHide} width={"350px"} height={"400px"}>
      {show && (
        <div className="CheckedModal">
          <div className="checkModalHeader">
            <div></div>
            <div>
              <img src="/images/checked_button.png" alt="공지 확인 아이콘" />
              &nbsp; 확인한 사람
            </div>
            <div onClick={onHide} >닫기</div>
          </div>
          <div className="checkModalBody">
            {data.map((name, idx) => (
              <div key={idx}>{name}</div>
            ))}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CheckedModal;

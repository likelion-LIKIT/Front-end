// 작성자 : 이수화

import { useNavigate } from 'react-router-dom';
import "../styles/DeleteModal.css";
import Modal from "./Modal";

const DeleteModal = ({ show, onHide, id, page}) => {
  const navigate = useNavigate();
  
  const handleDelete = () => {
    /**
     * todo: 게시물 삭제 API 구현 
     * 삭제 후 호출된 메인페이지로 이동
     * id: 게시물 id, page: 호출한 페이지
     */

    navigate(`/${page}`);
  };

  return (
    <div className="DeleteModal">
      <Modal show={show} onHide={onHide} width={"450px"} height={"250px"}>
        {show && (
          <div className="deleteModalBody">
            <div className="deleteModalText">
              <img src="/images/delete_modal_icon.png" alt="삭제 모달 이미지" />
              <span>해당 게시물을 삭제하시겠습니까 ?</span>
              <span>한 번 삭제된 게시물은 다시 복구할 수 없습니다.</span>
            </div>
            <div className="deleteModalBtns">
              <button id="cancel" onClick={onHide}>
                취소
              </button>
              <button id="delete" onClick={handleDelete}>
                삭제
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DeleteModal;

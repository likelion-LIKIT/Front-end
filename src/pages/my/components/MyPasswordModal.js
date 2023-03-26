// 작성자: 구현우

import Modal from "../../../common/components/Modal";

import "../styles/MyPasswordModal.css";

const MyPasswordModal = ({ show, onHide, width, height }) => {
  return (
    <div id="MyPasswordModal">
      <Modal show={show} onHide={onHide} width={width} height={height}></Modal>
    </div>
  );
};

export default MyPasswordModal;

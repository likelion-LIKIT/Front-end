// 작성자: 구현우

import Modal from "../../../common/components/Modal";

import "../styles/MyTechnologyModal.css";

const MyTechnologyModal = ({ show, onHide, width, height }) => {
  return (
    <div id="MyTechnologyModal">
      <Modal show={show} onHide={onHide} width={width} height={height}></Modal>
    </div>
  );
};

export default MyTechnologyModal;

// 작성자: 구현우


import Modal from "../../../common/components/Modal";
import "../styles/ScheduleModal.css";

const ScheduleModal = ({show, onHide, width, height}) => {

  return (
    <div id="ScheduleModal">
        <Modal show = {show} onHide = {onHide} width = {width} height = {height}>

        </Modal>
    </div>
  );
}

export default ScheduleModal;

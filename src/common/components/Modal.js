// 작성자 : 구현우

import '../styles/Modal.css';

const Modal = ({show, onHide, width, height, children}) => {
  return (
    <>
      <div className={['Modal', show && 'show_Modal'].join(' ')} onClick={() => onHide()}/>
      <div className={['modal_box', show && 'show_modal_box'].join(' ')} style={{width: width, height: height}}>
        {children}
      </div>
    </>
  );
}

export default Modal;
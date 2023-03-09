// 작성자 : 이수화

import "../styles/FormWriteBox.css";
import { formText } from "../constant/Form";

const FormWriteBox = ({ page, setContents }) => {
  const handleChange = (e) => {
    setContents(e.target.value);
  };

  return (
    <div className="FormWriteBox">
      <div className="formFunctionBtns">
        <div>H1</div>
        <div>H2</div>
        <div>H3</div>
        <div>H4</div>
        <div>
          <strong>B</strong>
        </div>
        <div>
          <i>i</i>
        </div>
        <div>link</div>
        <div>image</div>
      </div>
      <div className="formTextArea">
        <textarea
          placeholder={`${formText[`${page}`]}를 작성해보세요`}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FormWriteBox;

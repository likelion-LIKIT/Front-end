// 작성자 : 이수화

import { useRef } from "react";
import "../styles/FormWriteBox.css";
import { formText, tagAddText } from "../constant/Form";

const FormWriteBox = ({ page, contents, setContents }) => {
  const textAreaRef = useRef();

  const handleChange = (e) => {
    setContents(e.target.value);
  };

  const getCurrentPosition = (cmd) => {
    // textArea의 클릭/드래그한 부분의 시작, 끝 위치
    const startPos = textAreaRef.current.selectionStart;
    const endPos = textAreaRef.current.selectionEnd;

    // 입력된 값 없을 때 [0,0] 반환
    if (!contents) return [0, 0];

    const hTag = ["h1", "h2", "h3", "h4"];

    // 입력값이 h tag이면 => 무조건 한 행 단위로 처리
    if (hTag.includes(cmd)) {
      // 앞, 뒤로 개행을 만날때까지의 좌표를 받아서 좌표 반환

      // 앞으로 순회
      let startReplace = 0;
      // 현재 커서 위치가 \n 이면
      for (let i = startPos - 1; i >= 0; i--) {
        if (contents[i] === "\n") {
          startReplace = i + 1;
          break;
        }
      }

      // 뒤로 순회
      let endReplace = contents.length;
      for (let i = endPos; i <= contents.length - 1; i++) {
        if (contents[i] === "\n") {
          endReplace = i;
          break;
        }
      }

      // startReplace : 태그를 걸 문장의 시작 인덱스 (이전 문장의 \n 다음)
      // endReplace : 태그를 걸 문장의 마지막 인덱스 (현재 문장의 \n 포함)
      return [startReplace, endReplace];
    }

    // 입력값이 h tag가 아니면(bold, italic 등) => 드래그 처리
    else {
      return [startPos, endPos - 1];
    }
  };

  // 이미 적용된 태그인지 확인하는 함수
  function includeTag(start, end, tag) {
    const cnt = contents.slice(start, end + 1).split("#").length - 1;
    // 이미 적용되었다면 1 반환
    if (tag === "h1" && cnt === 1) return 1;
    if (tag === "h2" && cnt === 2) return 1;
    if (tag === "h3" && cnt === 3) return 1;
    // 적용이 안되었다면 0 반환
    return 0;
  }

  // start, end : 현 좌표 기준 replace를 수행할 곳의 시작, 끝 좌표
  const replaceTag = (start, end, tag) => {
    let frontText = textAreaRef.current.value.substring(0, start);
    let draggedText = textAreaRef.current.value.substring(start, end + 1);
    let rearText = textAreaRef.current.value.substring(end + 1);

    // 양 사이드로 태그 처리
    if (tag === "b" || tag === "i") {
      draggedText += `${tagAddText[`${tag}`]}`;
    }

    // contents가 없으면
    if (!contents) {
      setContents(`${tagAddText[`${tag}`]}` + draggedText);
      textAreaRef.current.value = `${tagAddText[`${tag}`]}` + draggedText;
    } else {
      if (draggedText.includes("#")) {
        draggedText = draggedText.replaceAll("#", "");
      }

      // 현재 textArea에서 보이는 값
      textAreaRef.current.value =
        frontText + `${tagAddText[`${tag}`]}` + draggedText + rearText;
      setContents(
        frontText + `${tagAddText[`${tag}`]}` + draggedText + rearText
      );
    }
  };

  // 태그에 맞는 기능 수행 함수
  const handleFunctionBtn = (tag) => {
    const [start, end] = getCurrentPosition(tag);
    if (includeTag(start, end, tag)) return;
    replaceTag(start, end, tag);
  };

  return (
    <div className="FormWriteBox">
      <div className="formFunctionBtns">
        <div onClick={() => handleFunctionBtn("h1")}>H1</div>
        <div onClick={() => handleFunctionBtn("h2")}>H2</div>
        <div onClick={() => handleFunctionBtn("h3")}>H3</div>
        <div onClick={() => handleFunctionBtn("h4")}>H4</div>
        <div onClick={() => handleFunctionBtn("b")}>
          <strong>B</strong>
        </div>
        <div onClick={() => handleFunctionBtn("i")}>
          <i>i</i>
        </div>
        <div>link</div>
        <div>image</div>
      </div>
      <div className="formTextArea">
        <textarea
          ref={textAreaRef}
          placeholder={`${formText[`${page}`]}를 작성해보세요`}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FormWriteBox;

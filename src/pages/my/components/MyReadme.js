// 작성자: 구현우

import MyUtils from "../utils/MyUtils";

import { useEffect, useRef, useState } from "react";
import "../styles/MyReadme.css";

const MyReadme = ({ isMe, setUserInfo, userInfo, description }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateValue, setUpdateValue] = useState(description);

  const updateRef = useRef();

  useEffect(() => {
    if (isUpdate) {
      updateRef.current.focus();
      updateReadme(description);
    }
  }, [isUpdate]);

  const clickReadmeBtn = () => {
    if (isUpdate) {
      if (window.confirm("해당 내용으로 수정하시겠습니까?")) {
        setUserInfo({ ...userInfo, description: updateValue });
        MyUtils.updateUserInfro("description", updateValue);

        setIsUpdate(false);
      }
    } else {
      setIsUpdate(true);
    }
  };

  const updateReadme = (value) => {
    updateRef.current.style.height = "auto";
    updateRef.current.style.height = updateRef.current.scrollHeight + "px";
    setUpdateValue(value);
  };

  const countTextLength = () => {
    return updateValue.length;
  };

  const clickReadmeCancle = () => {
    setUpdateValue(description);
    setIsUpdate(false);
  };

  const makeReadmeText = (text) => {
    const line = text.split("\n").map((element) => element);
    const answer = [];

    for (let i = 0; i < line.length; i++) {
      answer.push(<div key={i}>{line[i]}</div>);
    }

    return answer;
  };

  return (
    <div id="MyReadme">
      <div>
        <div>ReadMe</div>
        {isMe && (
          <div>
            {isUpdate && <button onClick={() => clickReadmeCancle()}>취소</button>}
            <button onClick={() => clickReadmeBtn()}>{isUpdate ? "저장" : "수정"}</button>
          </div>
        )}
      </div>
      <div>
        {isUpdate && <div id="readme_text_count">({countTextLength()} / 100)</div>}
        {isUpdate ? (
          <textarea
            ref={updateRef}
            rows={1}
            value={updateValue}
            maxLength="100"
            onChange={(e) => updateReadme(e.target.value)}
          />
        ) : (
          <div>{description === "" ? '"인사말을 남겨보세요."' : makeReadmeText(description)}</div>
        )}
      </div>
    </div>
  );
};

export default MyReadme;

// 작성자: 구현우

import { Technologies } from "../constant/Technologies";
import MyTechnologyModal from "./MyTechnologyModal";

import { useState } from "react";

import "../styles/MyTechnology.css";

const MyTechnology = ({ isMe, setUserInfo, userInfo, tech_stack }) => {
  const [TechnologyModal, setTechnologyModal] = useState(false);

  const showTech = () => {
    if (!tech_stack.length) return '"자신있는 기술을 추가해 보세요."';

    const answer = [];

    tech_stack.forEach((badge) => {
      answer.push(Technologies[badge]);
    });

    return answer;
  };

  return (
    <div id="MyTechnology">
      <div>
        <div>Technology</div>
        {isMe && <button onClick={() => setTechnologyModal(true)}>수정</button>}
      </div>
      <div>{showTech()}</div>

      <MyTechnologyModal
        show={TechnologyModal}
        onHide={() => setTechnologyModal(TechnologyModal && !TechnologyModal)}
        width={"500px"}
        height={"500px"}
      />
    </div>
  );
};

export default MyTechnology;

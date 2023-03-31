// 작성자: 구현우

import { Technologies } from "../constant/Technologies";

import { useState } from "react";

import "../styles/MyTechnology.css";

const MyTechnology = ({ isMe, tech_stack, setTechnologyModal }) => {
  const showTech = () => {
    if (!tech_stack.length) return '"자신있는 기술을 추가해 보세요."';

    const answer = [];

    tech_stack.forEach((badge, index) => {
      const badgeInfo = Technologies[badge];

      answer.push(
        <img
          key={index}
          src={`https://img.shields.io/badge/${badgeInfo.name}-${badgeInfo.backColor}?style=for-the-badge&logo=${badgeInfo.logo}&logoColor=${badgeInfo.color}`}
          alt={badgeInfo.name}
        ></img>
      );
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
    </div>
  );
};

export default MyTechnology;

// 작성자: 구현우

import Modal from "../../../common/components/Modal";
import { Technologies } from "../constant/Technologies";

import "../styles/MyPasswordModal.css";
import "../styles/MyTechnologyModal.css";

import { useEffect, useRef, useState } from "react";
import MyUtils from "../utils/MyUtils";

const MyTechnologyModal = ({ show, onHide, width, height, setUserInfo, userInfo, tech_stack }) => {
  const [updateTech, setUpdateTech] = useState(tech_stack);

  const badgeBtnRef = useRef([]);
  const updateBtnRef = useRef();

  useEffect(() => {
    if (!show) {
      setUpdateTech(tech_stack);
    }
  }, [show]);

  useEffect(() => {
    if (
      tech_stack.length === updateTech.length &&
      tech_stack.sort().every((value, index) => value === updateTech.sort()[index])
    ) {
      updateBtnRef.current.style = "opacity: 0.4; pointer-events: none;";
    } else {
      updateBtnRef.current.style = "opacity: 1; pointer-events: all; cursor: pointer;";
    }
  }, [updateTech]);

  const hoverBadgeBtn = (index, value) => {
    badgeBtnRef.current[index].style = `opacity: ${value};`;
  };

  const clickedBadgeBtn = (badge, clicked) => {
    if (clicked) {
      let changeIndex = -1;

      for (let i = 0; i < updateTech.length; i++) {
        if (badge === updateTech[i]) {
          changeIndex = i;
          break;
        }
      }

      let nextTech = [];

      nextTech = [
        ...updateTech.slice(0, changeIndex),
        ...updateTech.slice(changeIndex + 1, updateTech.length),
      ];

      setUpdateTech(nextTech);
    } else {
      setUpdateTech([badge, ...updateTech]);
    }
  };

  const updateTechStack = () => {
    MyUtils.updateTechStack(updateTech, setUserInfo, userInfo);
    // 실패시 onHide 안하는 로직 구현 필요
    onHide();
  };

  const showTech = () => {
    const answer = [];
    let key = 0;

    for (let badge in Technologies) {
      const badgeInfo = Technologies[badge];

      const clicked = updateTech.includes(badge);
      const badge_index = key++;

      answer.push(
        <div key={badge_index}>
          <img
            src={`https://img.shields.io/badge/${badgeInfo.name}-${badgeInfo.backColor}?style=for-the-badge&logo=${badgeInfo.logo}&logoColor=${badgeInfo.color}`}
            alt={badgeInfo.name}
          ></img>
          <div
            ref={(el) => (badgeBtnRef.current[badge_index] = el)}
            style={clicked ? { opacity: "0" } : { opacity: "0.7" }}
            onMouseEnter={() => hoverBadgeBtn(badge_index, "0")}
            onMouseLeave={() => hoverBadgeBtn(badge_index, clicked ? "0" : "0.7")}
            onClick={() => clickedBadgeBtn(badge, clicked)}
          ></div>
        </div>
      );
    }
    return answer;
  };

  return (
    <div className={["none_MyTechnologyModal", show && "MyTechnologyModal"].join(" ")}>
      <Modal show={show} onHide={onHide} width={width} height={height}>
        <div id="mytechnologymodal">
          <div id="mytechnologymodal_header">
            <span>
              <span>🛠️</span>
              <span>Technology</span>
            </span>
            <button onClick={() => onHide()}>닫기</button>
          </div>
          <div id="mytechnologymodal_body">{showTech()}</div>
          <div id="mytechnologymodal_footer">
            <button ref={updateBtnRef} onClick={() => updateTechStack()}>
              수정
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MyTechnologyModal;

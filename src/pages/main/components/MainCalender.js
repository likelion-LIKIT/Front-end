// 작성자: 구현우

import CalenderUtils from "../utils/CalenderUtils";

import "../styles/MainCalender.css";
import { useEffect, useState } from "react";

const MainCalender = () => {
  const [dateState, setDateState] = useState({});

  const [clickBtn, setClickBtn] = useState(false);
  const [directionBtn, setDirectionBtn]  = useState('');

  useEffect(() => {
    if(directionBtn === '') setDateState({ monthList: CalenderUtils.monthList() });
    else if(clickBtn) {
      setDateState({ monthList: CalenderUtils.updateCalender(directionBtn) });
      setClickBtn(false);
    }
  },[directionBtn, clickBtn]);

  const calenderHeader = () => {
    const dayWeek = [['일', '1'], ['월', '0.9'], ['화', '0.8'], ['수', '0.7'], ['목', '0.6'], ['금', '0.5'], ['토', '0.4']];
    const header = [];

    dayWeek.forEach(([day, color]) => {
      header.push(
        <div key={day} id="calender_header_element" style={{backgroundColor: `rgba(255, 199, 54, ${color})`}}>
          {day}
        </div>
      );
    });

    return header;
  }

  const colorCheck = (date) => {
    let style = {};

    if(date.split(' ').includes('01일') || date.split(' ').includes('오늘')) {
      style = { ...style, color: "#ffb700" };
    }

    return style;
  }

  const calenderBody = () => {
    const body = [];

    if(dateState.monthList) {
      for(let i = 0; i < dateState.monthList.length; i++) {
        body.push(
          <div key={i} id="calender_body_element" style={colorCheck(dateState.monthList[i])}>
            {dateState.monthList[i]}
          </div>
        );
      }
    }

    return body;
  }

  const turnOverCalender = (direction) => {
    setClickBtn(true);
    setDirectionBtn(direction);
  }

  return (
    <div id="MainCalender">
      <div id="calender_title"><span>📅</span>일정</div>
      <div>
        <div id="calender_header">{calenderHeader()}</div>
        <div id="calender_body">
          {calenderBody()}
          <div className="calender_left_button"><img src="images/calender_left_button.png" alt="left" onClick={() => turnOverCalender('left')}/></div>
          <div className="calender_right_button"><img src="images/calender_right_button.png" alt="right" onClick={() => turnOverCalender('right')}/></div>
        </div>
      </div>
    </div>
  );
}

export default MainCalender;

// 작성자: 구현우

import CalenderUtils from "../utils/CalenderUtils";
import ScheduleUtils from "../utils/ScheduleUtils";

import "../styles/MainCalender.css";
import { useEffect, useState, useRef } from "react";

const MainCalender = () => {
  const [dateState, setDateState] = useState({});
  const [scheduleState, setScheduleState] = useState({});

  const [clickBtn, setClickBtn] = useState(false);
  const [directionBtn, setDirectionBtn]  = useState('');

  useEffect(() => {
    if(dateState.monthList) {
      setScheduleState({ ...ScheduleUtils.setSchedule(dateState.monthList) });
    }
  }, [dateState])

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

    if(date[2] === '01' || date.includes(' 오늘')) {
      style = { ...style, color: "#ffb700" };
    }

    return style;
  }

  const scheduleBody = (date) => {
    if(date.length > 3) date.pop();
    const str_date = date.join('-');

    const day_schedule = [];

    if(scheduleState[str_date]) {
      scheduleState[str_date].forEach((date_object, index) => {
        day_schedule.push(
          <div key={index} id="schedule_body_element">
            <span>{Number(date_object.hour) < 10 ? '0' + date_object.hour : date_object.hour}</span>
            <span>{Number(date_object.minute) < 10 ? '0' + date_object.minute : date_object.minute} </span>
            <span>{date_object.contents}</span>
          </div>
        )
      })
    }

    return day_schedule;
  }

  const calenderBody = () => {
    const body = [];

    if(dateState.monthList) {
      for(let i = 0; i < dateState.monthList.length; i++) {
        body.push(
          <div key={i} id="calender_body_element" style={colorCheck(dateState.monthList[i])}>
            <div id="calender_body_element_header">
              <div>{
                (dateState.monthList[i][2] === '01' ? (dateState.monthList[i][1] + '.') : '') +
                dateState.monthList[i][2] +
                (dateState.monthList[i][3] ? dateState.monthList[i][3] : '')
              }</div>
              <button>+</button>
            </div>
            <div id="calender_body_element_content">
              {scheduleBody(dateState.monthList[i])}
            </div>
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

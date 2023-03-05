// 작성자: 구현우


import { useState } from "react";
import Modal from "../../../common/components/Modal";

import "../styles/ScheduleModal.css";

import ScheduleUtils from "../utils/ScheduleUtils";

const ScheduleModal = ({show, onHide, width, height}) => {
  const tag_list = [["스터디", "#4585E5"], ["해커톤", "#FF8A00"], ["기타", "#2D2D2D"]];
  const [tagColor, setTagColor] = useState({
    "스터디": ["rgb(255, 255, 255)", "rgb(138, 138, 138)"],
    "해커톤": ["rgb(255, 255, 255)", "rgb(138, 138, 138)"],
    "기타": ["rgb(255, 255, 255)", "rgb(138, 138, 138)"]
  });

  const [scheduleData, setScheduleData] = useState({
    "time": {"hour": "", "minute": ""},
    "contents": "",
    "tag": "",
  });

  const updateTagColor = (tag_name, tag_color) => {
    if(scheduleData.tag === tag_name) return;

    setTagColor({
      ...tagColor,
      [tag_name]: [tag_color, "white"]
    })
  }

  const removeTagColor = (tag_name) => {
    if(scheduleData.tag === tag_name) return;

    setTagColor({
      ...tagColor,
      [tag_name]: ["rgb(255, 255, 255)", "rgb(138, 138, 138)"]
    })
  }

  const saveTag = (tag, color) => {
      if(scheduleData.tag === tag) {
        setScheduleData({
          ...scheduleData,
          "tag": ""
        })

        setTagColor({
          ...tagColor,
          [tag]: ["rgb(255, 255, 255)", "rgb(138, 138, 138)"]
        })
      }
      else {
        if(scheduleData.tag !== "") {
          setTagColor({
            ...tagColor,
            [scheduleData.tag]: ["rgb(255, 255, 255)", "rgb(138, 138, 138)"],
            [tag]: [color, "white"]
          })
        }

        setScheduleData({
          ...scheduleData,
          "tag": tag
        })
      }
  }

  const setTag = () => {
    const set_tag = [];

    tag_list.forEach(([tag, color], index) => {
      set_tag.push(
        <button key={index} onMouseEnter={() => updateTagColor(tag, color)} onMouseLeave={() => removeTagColor(tag)}
        onClick={() => saveTag(tag, color)} style={{backgroundColor: tagColor[tag][0], color: tagColor[tag][1]}}>
          {tag}
        </button>
      );
    });

    return set_tag;
  }

  const writeSchedule = (value, title) => {
    if(title === "contents") {
      setScheduleData({
        ...scheduleData,
        "contents": value
      })
      return;
    }

    setScheduleData({
      ...scheduleData,
      "time": {
        ...scheduleData["time"],
        [title]: value
      }
    })
  }

  return (
    <div className={["none_ScheduleModal", show && "ScheduleModal"].join(' ')}>
      <Modal show = {show} onHide = {onHide} width = {width} height = {height}>
        <div id="ScheduleModal_contents">
          <div className="ScheduleModal_header">
            <div>
              {`${show[1] ? show[1] : '00'}월 ${show[2] ? show[2] : '00'}일`}
            </div>
            <button onClick={() => onHide()}>닫기</button>
          </div>
          <div className="ScheduleModal_body">
            <div className="schedulemodal_time">
              <div>
                <div>시  간</div>
                <div>24시간제로 입력하여 주세요.</div>
              </div>
              <div>
                <input placeholder="00" maxLength="2" value={scheduleData.time.hour} onChange={(e) => writeSchedule(e.target.value, "hour")}/>
                <div>시</div>
                <input placeholder="00" maxLength="2" value={scheduleData.time.minute} onChange={(e) => writeSchedule(e.target.value, "minute")}/>
                <div>분</div>
              </div>
            </div>
            <div className="schedulemodal_input">
              <div>
                <div>내  용</div>
                <div>({scheduleData.contents.length > 10 ? 10 : scheduleData.contents.length} / 10)</div>
              </div>
              <div>
                <input maxLength="10" value={scheduleData.contents} onChange={(e) => writeSchedule(e.target.value, "contents")}/>
              </div>
            </div>
            <div className="schedulemodal_tag">
              <div>
                태  그
              </div>
              <div>
                {setTag()}
              </div>
            </div>
          </div>
          <div className="ScheduleModal_footer">
            <button onClick={() => ScheduleUtils.checkData(show, scheduleData)}>작성</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ScheduleModal;

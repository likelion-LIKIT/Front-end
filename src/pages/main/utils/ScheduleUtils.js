// 작성자: 구현우

import ScheduleAPI from "../api/ScheduleAPI";

const ScheduleUtils = {
    setSchedule(monthList) {
        const schedule = ScheduleAPI.getSchedule(monthList);

        return schedule;
    },

    removeSchedule(date, schedule) {
        if(window.confirm(`${date} ${schedule.hour}시 ${schedule.minute}분\n${schedule.contents}를(을) 삭제 하시겠습니까?`)) {
            return ScheduleAPI.deleteSchedule(date, schedule);
        }
        return false;
    }
}

export default ScheduleUtils;
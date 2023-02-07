// 작성자: 구현우

import ScheduleAPI from "../api/ScheduleAPI";

const ScheduleUtils = {
    setSchedule(monthList) {
        const schedule = ScheduleAPI.getSchedule(monthList);

        return schedule;
    }
}

export default ScheduleUtils;
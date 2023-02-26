// 작성자: 구현우

const ScheduleAPI = {
    schedule_data : {},
    
    addSchedule(date, newSchedule) {
        if(this.schedule_data[date]) {
            this.schedule_data[date] = [
                ...this.schedule_data[date],
                newSchedule
            ]
        } else {
            this.schedule_data[date] = [newSchedule];
        }

        return this.schedule_data;
    },

    getSchedule(monthList) {
        // 스케줄 받아오는 api 작성 필요

        this.schedule_data = {
            '2023-01-31' : [
                {'hour': 10, 'minute': 30, 'contents': "스터디", "tag": "study"},
                {'hour': 13, 'minute': 0, 'contents': "해커톤", "tag": "ton"},
                {'hour': 19, 'minute': 0, 'contents': "회식", "tag": "etc"}
            ],
            '2023-02-01' : [
                {'hour': 10, 'minute': 30, 'contents': "스터디", "tag": "study"}
            ],
            '2023-02-04' : [
                {'hour': 13, 'minute': 0, 'contents': "해커톤", "tag": "ton"}
            ],
            '2023-02-03' : [
                {'hour': 19, 'minute': 0, 'contents': "회식", "tag": "etc"}
            ],
            '2023-02-07' : [
                {'hour': 10, 'minute': 30, 'contents': "스터디", "tag": "study"},
                {'hour': 13, 'minute': 0, 'contents': "해커톤", "tag": "ton"},
                {'hour': 19, 'minute': 0, 'contents': "회식", "tag": "etc"},
                {'hour': 20, 'minute': 30, 'contents': "스터디", "tag": "study"},
                {'hour': 21, 'minute': 0, 'contents': "해커톤", "tag": "ton"},
                {'hour': 21, 'minute': 10, 'contents': "회식", "tag": "etc"}
            ]
        }

        // 임시 데이터
        return this.schedule_data;
    },

    deleteSchedule(date, schedule) {
        // 삭제 처리 api 구현 필요

        const change_data = [];

        this.schedule_data[date].forEach((elements) => {
            if(schedule.hour !== elements.hour || schedule.minute !== elements.minute) {
                change_data.push(elements);
            }
        });

        if(change_data.length) {
            this.schedule_data[date] = change_data;
        } else {
            delete this.schedule_data[date];
        }

        return this.schedule_data;
    }
}

export default ScheduleAPI;
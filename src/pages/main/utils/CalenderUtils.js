// 작성자: 구현우

const CalenderUtils = {
    today: {
        year: '',
        month: '',
        date: ''
    },

    monthStandard: {
        startDay: '',
        endDay: ''
    },

    // 달력 날짜 리스트 생성 및 반환
    monthList() {
        const thisSunday = this.checkSunday();
        const startDay = new Date(thisSunday.getFullYear(), thisSunday.getMonth(), thisSunday.getDate() - 6);
        const endDay = new Date(thisSunday.getFullYear(), thisSunday.getMonth(), thisSunday.getDate() + 28);
    
        this.initMonthStandard(startDay, endDay);

        let monthList = this.getDatesMonth();
        monthList = this.filterMonth(monthList);

        return monthList;
    },

    // 금일 기준 전 일요일 반환
    checkSunday() {
        const todayChar = this.makeChar(new Date());
        const thisWeekumber = new Date(todayChar).getDay();

        const today = new Date();
        this.initToday(today);
        const thisSunday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - thisWeekumber);

        return thisSunday;
    },

    // 날씨 데이터 중 필요한 부분만 수정하여 반환
    makeChar(date) {
        return date.toISOString().split('T')[0];
    },

    // 리스트 생성 및 반환
    getDatesMonth() {
        const result = [];

        let temp_startDay = this.monthStandard.startDay;
        let temp_endDay = this.monthStandard.endDay;

        while(temp_startDay <= temp_endDay) {
            result.push(temp_startDay.toISOString().split("T")[0]);
            temp_startDay.setDate(temp_startDay.getDate() + 1);
        }

        temp_startDay.setDate(temp_startDay.getDate() - 35);

        return result;
    },

    // 날짜 초기 설정
    initToday(today) {
        this.today = {
            year: today.getFullYear(), 
            month: today.getMonth() + 1, 
            date: today.getDate()
        };
    },

    // 달력 첫번 째 날짜, 마지막 날짜 초기 설정
    initMonthStandard(startDay, endDay) {
        this.monthStandard = {
            startDay: startDay, 
            endDay: endDay, 
        };
    },

    // 매 달의 시작날과 금일을 수정하여 반환
    filterMonth(monthList) {
        const filterMonth = monthList.map((dateChar) => {
            const date = dateChar.split('-');

            let result = [`${date[0]}`, `${date[1]}`, `${date[2]}`];

            if(dateChar === `${this.today.year}-${this.tensCheck(this.today.month)}-${this.tensCheck(this.today.date)}`) {
                result.push(` 오늘`);
            }
            
            return result;
        });

        return filterMonth;
    },

    // 10보다 작은 수는 '0'을 붙여 반환
    tensCheck(number) {
        if(Number(number) < 10) {
            return `0${number}`;
        }
        return number;
    },

    // 캘린더 리스트 수정하여 반환
    updateCalender(direction) {
        this.updateStandard(direction);

        let updateMonthList = this.getDatesMonth();
        updateMonthList = this.filterMonth(updateMonthList);

        return updateMonthList;
    },

    // 기준 날짜 수정
    updateStandard(direction) {
        const plusDay = direction === 'right' ? 35 : -35;

        this.monthStandard.startDay.setDate(this.monthStandard.startDay.getDate() + plusDay);
        this.monthStandard.endDay.setDate(this.monthStandard.endDay.getDate() + plusDay);
    },
}

export default CalenderUtils;
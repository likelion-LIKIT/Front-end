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

    monthList() {
        const thisSunday = this.checkSunday();
        const startDay = new Date(thisSunday.getFullYear(), thisSunday.getMonth(), thisSunday.getDate() - 6);
        const endDay = new Date(thisSunday.getFullYear(), thisSunday.getMonth(), thisSunday.getDate() + 28);
        this.initMonthStandard(startDay, endDay);

        let monthList = this.getDatesMonth(startDay, endDay);
        monthList = this.filterMonth(monthList);

        return monthList;
    },

    checkSunday() {
        const todayChar = this.makeChar(new Date());
        const thisWeekumber = new Date(todayChar).getDay();

        const today = new Date();
        this.initToday(today);
        const thisSunday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - thisWeekumber);

        return thisSunday;
    },

    makeChar(date) {
        return date.toISOString().split('T')[0];
    },

    getDatesMonth(startDate, endDate) {
        const result = [];

        while(startDate <= endDate) {
          result.push(startDate.toISOString().split("T")[0]);
          startDate.setDate(startDate.getDate() + 1);
        }

        return result;
    },

    initToday(today) {
        this.today = {
            year: today.getFullYear(), 
            month: today.getMonth() + 1, 
            date: today.getDate()
        };
    },

    initMonthStandard(startDay, endDay) {
        this.monthStandard = {
            startDay: startDay, 
            endDay: endDay, 
        };
    },

    filterMonth(monthList) {
        const filterMonth = monthList.map((dateChar) => {
            const date = dateChar.split('-');

            let result = `${date[2]}일`;

            if(date[2] === '01') {
                result = `${date[1]}월 ${result}`;
            }
            if(dateChar === `${this.today.year}-${this.tensCheck(this.today.month)}-${this.tensCheck(this.today.date)}`) {
                result += ` 오늘`;
            }
            
            return result;
        });

        return filterMonth;
    },

    tensCheck(number) {
        if(Number(number) < 10) {
            return `0${number}`;
        }
        return number;
    }
}

export default CalenderUtils;
// 작성자: 구현우

const ExceptionUtils = {
    checkException(scheduleData) {
        if(!this.checkTime(scheduleData.time) || !this.checkContents(scheduleData.contents) || !this.checkTag(scheduleData.tag)) {
            return false;
        }
        return true;
    },

    checkTime(time) {
        if(this.isEmpty(time.hour) || this.isEmpty(time.minute)) {
            alert("시간을 입력하여 주세요.");
            return false;
        }
        if(!this.isNumber(time.hour) || !this.isNumber(time.minute)) {
            alert("시간에는 숫자를 입력하여 주세요.");
            return false;
        }
        if(!this.hourRange(time.hour)) {
            alert("시를 0 ~ 23 범위 이내로 입력하여 주세요.");
            return false;
        }
        if(!this.minuteRange(time.minute)) {
            alert("분을 0 ~ 59 범위 이내로 입력하여 주세요.");
            return false;
        }

        return true;
    },

    checkContents(contents) {
        if(this.isEmpty(contents)) {
            alert("내용을 입력하여 주세요.");
            return false;
        }
        return true;
    },

    checkTag(tag) {
        if(this.isEmpty(tag)) {
            alert("태그를 선택하여 주세요.");
            return false;
        }
        return true;
    },

    isEmpty(element) {
        return element === "" ? true : false;
    },

    isNumber(element) {
        if(Number(element) || Number(element) === 0) return true;
        return false;
    }, 

    hourRange(hour) {
        if(hour >= 0 && hour < 24) return true;
        return false;
    }, 

    minuteRange(minute) {
        if(minute >= 0 && minute < 60) return true;
        return false;
    }
}

export default ExceptionUtils;
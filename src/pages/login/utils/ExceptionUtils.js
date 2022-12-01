// 작성자: 구현우

const ExceptionUtils = {
    checkException(id) {
        if(this.checkId(id)) return true;
        return false;
    },

    checkId(id) {
        const idRegExp = /[0-9]{8}/;
        if(idRegExp.test(id)) return true;
        return false;
    },
}

export default ExceptionUtils;
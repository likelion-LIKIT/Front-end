// 작성자: 구현우

import NoticeAPI from "../api/NoticeAPI";

const NoticeUtils = {
    setNotice() {
        const noticeList = NoticeAPI.getNotice();

        return noticeList;
    }
}

export default NoticeUtils;
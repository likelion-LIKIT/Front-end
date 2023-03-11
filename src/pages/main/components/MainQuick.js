// 작성자: 구현우

import "../styles/MainQuick.css";

const MainQuick = () => {
  return (
    <div id="MainQuick">
        <div id="quick_title">
          <span>🐎</span>
          <span>Quick 메뉴</span>
          <span>for manager</span>
        </div>
        <div id="quick_body">
          <button>전체 공지 작성</button>
          <button>과제 공지 작성</button>
          <button>장부 작성</button>
          <button>활동 내역 작성</button>
        </div>
    </div>
  );
}

export default MainQuick;

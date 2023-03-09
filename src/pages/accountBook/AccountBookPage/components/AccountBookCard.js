// 작성자 : 이수화

import { useNavigate } from "react-router-dom";
import "../styles/AccountBookCard.css";
import { accountFontColor } from "../../constant/accountBookData";

const AccountBookCard = (props) => {
  const { data } = props;
  const navigate = useNavigate();

  return (
    <div
      className="AccountBookCard"
      onClick={() => navigate(`/notice/accountBook/${data.id}`)}
    >
      <div className="accountBookCardTitle">💸 {data.month}월 회계장부</div>
      <div className="accountBookCardDate">
        {data.date}
        <hr />
      </div>
      <div className="accountBookCardInfo">
        <div id="income" style={{ color: `${accountFontColor.income}` }}>
          <span>+</span>&nbsp;&nbsp;
          <span>{data.income}</span>
        </div>
        <div
          id="expenditure"
          style={{ color: `${accountFontColor.expenditure}` }}
        >
          <span>-</span>&nbsp;&nbsp;
          <span>{data.expenditure}</span>
        </div>
        <div
          id="spareMoney"
          style={{ color: `${accountFontColor.spareMoney}` }}
        >
          <span>
            {/* <img src="/images/arrow_black.png" alt="검정 화살표" /> */}
          </span>
          &nbsp;&nbsp;
          <span>{data.spareMoney}</span>
        </div>
      </div>
    </div>
  );
};

export default AccountBookCard;

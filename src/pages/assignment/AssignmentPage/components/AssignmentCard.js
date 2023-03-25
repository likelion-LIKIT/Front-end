// 작성자 : 이수화

import { useNavigate } from "react-router-dom";
import "../styles/AssignmentCard.css";
import { trackFontColor } from "../../constant/assignmentData";

const AssignmentCard = (props) => {
  const { data } = props;
  const navigate = useNavigate();

  return (
    <div
      className="AssignmentCard"
      onClick={() => navigate(`/assignment/detail/${data.id}`)}
    >
      <div className="assignmentCardTrack">
        <span style={{ color: `${trackFontColor[`${data.track}`]}` }}>
          {data.track}
        </span>
      </div>
      <div className="assignmentCardTitle">{data.title}</div>
      <div className="assignmentCardDate">{data.date}</div>
    </div>
  );
};

export default AssignmentCard;

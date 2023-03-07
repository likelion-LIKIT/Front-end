// 작성자 : 이수화

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ActivityCard.css";

const ActivityCard = (props) => {
  const { data, idx, width, cardIdx, currentIdx } = props;
  const navigate = useNavigate();
  const [showCard, setShowCard] = useState({
    depthOne: false,
    depthTwo: false,
    depthThree: false,
  });

  const setOrder = () => {
    let order;
    if (idx === currentIdx) {
      order = "first";
      if (showCard.depthThree) order += " showCard";
    } else if (idx === currentIdx + 1) {
      order = "second";
      if (showCard.depthTwo) order += " showCard";
    } else if (idx === currentIdx + 2) {
      order = "third";
      if (showCard.depthOne) order += " showCard";
    } else if (idx === currentIdx + 3) {
      order = "fourth";
      if (showCard.depthTwo) order += " showCard";
    } else if (idx === currentIdx + 4) {
      order = "fifth";
      if (showCard.depthThree) order += " showCard";
    } else order = "other";

    return order;
  };

  useEffect(() => {
    setTimeout(() => {
      setShowCard((prev) => {
        return {
          ...prev,
          depthOne: true,
        };
      });
    }, 600);

    setTimeout(() => {
      setShowCard((prev) => {
        return {
          ...prev,
          depthTwo: true,
        };
      });
    }, 800);

    setTimeout(() => {
      setShowCard((prev) => {
        return {
          ...prev,
          depthThree: true,
        };
      });
    }, 1000);
  }, []);

  return (
    <div
      className={`${["ActivityCard", setOrder()].join(" ")}`}
      style={{ width: `${width}px` }}
      onClick={() => navigate(`/activity/detail/${data.id}`)}
    >
      {/* cardIdx : {cardIdx}<br/>
      currentIdx : {currentIdx} <br/>
      idx : {idx} */}
    </div>
  );
};

export default ActivityCard;

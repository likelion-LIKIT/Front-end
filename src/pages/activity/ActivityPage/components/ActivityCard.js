// 작성자 : 이수화

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ActivityCard.css";

const ActivityCard = (props) => {
  const { data, idx, width, currentIdx } = props;
  const navigate = useNavigate();
  const [showCard, setShowCard] = useState({
    depthOne: false,
    depthTwo: false,
    depthThree: false,
  });

  const setOrder = () => {
    let order;
    switch (idx) {
      case currentIdx: {
        order = "first";
        if (showCard.depthThree) order += " showCard";
        break;
      }
      case currentIdx + 1: {
        order = "second";
        if (showCard.depthTwo) order += " showCard";
        break;
      }
      case currentIdx + 2: {
        order = "third";
        if (showCard.depthOne) order += " showCard";
        break;
      }
      case currentIdx + 3: {
        order = "fourth";
        if (showCard.depthTwo) order += " showCard";
        break;
      }
      case currentIdx + 4: {
        order = "fifth";
        if (showCard.depthThree) order += " showCard";
        break;
      }
      default: {
        order = "other";
        break;
      }
    }
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
      <div className="activityCardInfo">
        <div className='activityCardImg'><img src="/images/default_image.png" alt="활동 일지 썸네일 이미지" /></div>
        <div className="activityPostInfo">
          <div>{data.title}</div>
          <div>{data.date}</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;

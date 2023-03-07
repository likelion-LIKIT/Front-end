// 작성자 : 이수화

import '../styles/NoticeCard.css';
import {noticeCategoryIcon, noticeCategoryFontColor} from '../constant/Notice';
import { useNavigate } from 'react-router-dom';

const NoticeCard = (props) => {
  const {data} = props;
  const navigate = useNavigate();

  return (
    <div className="NoticeCard" onClick={()=>navigate(`/notice/detail/${data.id}`)}>
      <div className='noticeCardTop'>
        <div className='noticeCardCategory'>
          <span>{noticeCategoryIcon[`${data.category}`]}</span>
          <span style={{color: `${noticeCategoryFontColor[`${data.category}`]}`}}>
            {data.category}
          </span>
        </div>
        <div className='noticeCardTitle'>
          {data.title}
        </div>
        <div className='noticeCardDate'>
          {data.date}
        </div>
      </div>
      <div className='noticeCardBottom'>
        <img src='/images/default_image.png' alt='공지 이미지'/>
      </div>
    </div>
  );
}

export default NoticeCard;

// 작성자 : 이수화

import { useState } from 'react';
import '../styles/ActivityDetailPage.css';
import Layout from '../../../../common/components/Layout';
import DeleteModal from '../../../../common/components/DeleteModal';

const ActivityDetailPage = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const data = {
      'id': 1,
      'title': '금오공대 멋쟁이사자처럼 10기 OT',
      'writer': '운영진',
      'location': '금오공과대학교',
      'date': '2022.03.28',
      'img': 'link',
      'description': '별이 마리아 피어나듯이 노새, 있습니다. 것은 강아지, 아름다운 이름과 별이 계십니다. \n걱정도 둘 아침이 새워 까닭입니다. 하나에 멀리 릴케 하나에 쓸쓸함과 청춘이 겨울이 별이 새겨지는 거외다. 오는 둘 애기 별이 어머님, 가난한 아직 있습니다. 보고, 새겨지는 시와 있습니다. 덮어 강아지, 위에 계집애들의 노루, 봅니다. 소학교 다하지 봄이 소녀들의 벌레는 없이 별 북간도에 거외다. 헤는 별 별 하나에 나의 나는 슬퍼하는 아름다운 있습니다. 어머니, 내일 아무 것은 둘 계십니다. 어머님, 별 내 잔디가 이름자를 아침이 이제 거외다.'
  }

  const handleDelete = () => {
    setShowDeleteModal(true);
  }
  
  return (
    <div className="ActivityDetailPage">
      <Layout page='activity'>
        <div className='postFrame'>
          <div className='topButtons'>
            <span>수정</span>
            &nbsp;&nbsp;&nbsp;
            <span onClick={handleDelete}>삭제</span>
          </div>
          <div className='detailInfo'>
            <div className='detailTitle'>{data.title}</div>
            <div className='detailWrite'>{data.writer}&nbsp;&nbsp;|&nbsp;&nbsp;{data.date}</div><br/>
            <div className='activityEtc'>
              <div>장소 : {data.location}</div>
              <div>일시 : {data.date}</div>
            </div>
          </div><br/><br/>
          <div className='detailWriting'>
            {data.description}
          </div>
          <DeleteModal show={showDeleteModal} onHide={()=>{setShowDeleteModal(false)}} id={data.id} page={'activity'}/>
        </div>
      </Layout>
    </div>
  );
}

export default ActivityDetailPage;
// 작성자 : 이수화

import '../styles/NoticePage.css';
import Layout from "../../../../common/components/Layout";
import Title from '../../../../common/components/Title';
import ContentsFrame from '../../../../common/components/ContentsFrame';
import NoticeCard from './NoticeCard';
import { noticeData } from '../constant/noticeData';

const NoticePage = () => {

  return (
    <div className="NoticePage">
      <Layout page='notice'>
        <Title page='notice'/>
        <ContentsFrame page='notice'>
          {
            noticeData.map((data, idx) => 
              <NoticeCard key={idx} data={data}/>
            )
          }
        </ContentsFrame>
      </Layout>
    </div>
  );
}

export default NoticePage;

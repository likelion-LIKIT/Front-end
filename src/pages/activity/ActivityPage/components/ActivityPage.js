// 작성자 : 이수화

import '../styles/ActivityPage.css';
import Layout from '../../../../common/components/Layout';
import ActivityFrame from './ActivityFrame';
import Title from '../../../../common/components/Title';

const ActivityPage = () => {
  return (
    <div className="ActivityPage">
      <Layout page='activity'>
        <Title page='activity'/>
        <ActivityFrame/>
      </Layout>
    </div>
  );
}

export default ActivityPage;

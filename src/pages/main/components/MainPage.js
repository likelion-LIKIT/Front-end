// 작성자: 구현우

import Layout from '../../../common/components/Layout';
import MainCalender from './MainCalender';
import MainNotice from './MainNotice';
import MainQuick from './MainQuick';
import MainTitle from './MainTitle';

import { useEffect, useState } from 'react';

import "../styles/MainPage.css";

const MainPage = () => {
  const [frameState, setFrameState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFrameState(true);
    }, 1600);
  }, [])

  return (
    <div id="MainPage">
      <Layout>
        <div id='main_layout'>
          <div>
            <div><MainTitle /></div>
            <div className={['init_frame', frameState && 'main_frame'].join(' ')}><MainCalender /></div>
          </div>
          <div>
            <div className={['init_frame', frameState && 'main_frame'].join(' ')}><MainQuick /></div>
            <div className={['init_frame', frameState && 'main_frame'].join(' ')}><MainNotice /></div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default MainPage;

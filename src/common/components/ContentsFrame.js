// 작성자 : 이수화

import { useEffect, useState } from 'react';
import '../styles/ContentsFrame.css';

const ContentsFrame = (props) => {
  const {children} = props;
  const [showContents, setShowContents] = useState(false);
  const changeShowContents = () => {
    setTimeout(() => {
      setShowContents(true);
    }, 500);
  }

  // 0.5초 뒤 요소 보이도록 설정 
  useEffect(() => {
    changeShowContents();
  }, []);

  return (
    <div className={['ContentsFrame', showContents && 'showContents'].join(' ')}>
      {children}
    </div>
  );
}

export default ContentsFrame;

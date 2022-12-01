// 작성자 : 이수화
import { useState, useEffect } from 'react'; 

import Link from './Link';
import { handleLogout } from '../utils/LogoutUtils';
import '../styles/Header.css';

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);

    const makeNav = () => {
      return menu.map((item, idx) => <Link key={idx} to={item[1]}>{item[0]}</Link>)
    };

    const makeInfo = () => {
      return isLogin ?
        <>
          <div onClick={handleLogout}>Logout</div>
          <Link to='/my'>My</Link>
        </> : <Link to='/login'>Login</Link>
    }

    useEffect(() => {
      /**
       * @todo 로그인 체크 로직 구현 (로그인 시 isLogin이 true)
       */
      setIsLogin(false);
    }, [isLogin]);

    return (
      <div className='Header'>
        <div className='headerLogo'>
          <Link to='/'>LIKIT</Link>
        </div>
        <div className='headerNav'>
          {makeNav()}
        </div>
        <div className='headerInfo'>
          {makeInfo()}
        </div>
      </div>
    );
  }
  
  export default Header;

  const menu = [
    ['소개', '/introduce'],
    ['공지', '/notice'],
    ['활동', '/activity']
  ];
// 작성자: 구현우

import LoginBack from './LoginBack';
import LoginForm from './LoginForm';

import "../styles/LoginPage.css";
import { useEffect, useState } from 'react';
import Header from '../../../common/components/Header';

const LoginPage = () => {
  const [successLogin, setSuccessLogin] = useState(false);
  const [headerState, setHeaderState] = useState(true);

  useEffect(() => {
    if(successLogin) {
      setTimeout(() => {
        setHeaderState(false);
      }, 400);
    }
  }, [successLogin])

  return (
    <div id="LoginPage">
      <div className={["login_header", !headerState && "main_header"].join(' ')}>
        <Header />
      </div>
      <LoginBack successLogin={successLogin}/>
      <LoginForm setSuccessLogin={setSuccessLogin} successLogin={successLogin}/>
    </div>
  );
}

export default LoginPage;

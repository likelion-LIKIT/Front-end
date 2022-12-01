// 작성자: 구현우

import LoginBack from './LoginBack';
import LoginForm from './LoginForm';

import "../styles/LoginPage.css";
import { useState } from 'react';

const LoginPage = () => {
  const [successLogin, setSuccessLogin] = useState(false);

  return (
    <div id="LoginPage">
      <LoginBack successLogin={successLogin}/>
      <LoginForm setSuccessLogin={setSuccessLogin} successLogin={successLogin}/>
    </div>
  );
}

export default LoginPage;

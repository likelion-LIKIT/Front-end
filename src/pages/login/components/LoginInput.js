// 작성자: 구현우

import { useEffect, useState } from "react";

import "../styles/LoginInput.css";

const LoginInput = ({inputData, setInputData, clickLogin}) => {
    const [idInputState, setIdInputState] = useState(false);
    const [pwInputState, setPwInputState] = useState(false);

    useEffect(() => {
        if(inputData.id !== '') setIdInputState(true);
        else setIdInputState(false);
    }, [inputData.id]);

    useEffect(() => {
        if(inputData.pw !== '') setPwInputState(true);
        else setPwInputState(false);
    }, [inputData.pw]);

    const inputId = (e) => {
        setInputData({...inputData, id: e.target.value});
    }

    const inputPw = (e) => {
        setInputData({...inputData, pw: e.target.value});
    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
            clickLogin();
        }
    }

    return (
        <div id="LoginInput">
            <div>
                <div>아이디</div>
                <input className={["init_login_id", idInputState && "login_id"].join(' ')} type="text" value={inputData.id} onChange = {inputId}></input>
            </div>
            <div>
                <div>비밀번호</div>
                <input className={["init_login_pw", pwInputState && "login_pw"].join(' ')} type="password" autoComplete="new-password" value={inputData.pw} onChange = {inputPw} onKeyPress={onKeyPress}></input>
            </div>
        </div>
    );
};

export default LoginInput;

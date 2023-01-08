// 작성자: 구현우

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/LoginBack.css";

const LoginBack = ({successLogin}) => {
    const [gradation, setGradation] = useState(false);
    const [moveMain, setMoveMain] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setGradation(true);
        }, 300);
    }, []);

    useEffect(() => {
        if(successLogin) {
            setTimeout(() => {
                setMoveMain(true);
            }, 400);
            setTimeout(() => {
                navigate(`/`);
            }, 1100);
        }
    }, [successLogin, navigate])

    return (
        <div id="LoginBack">
            <img src="images/Login_BG.jpeg" alt="Login_Background" />  
            <div className="gradation_box"></div>
            <div className={['loginInitBack', gradation && 'loginGradation', moveMain && 'mainGradation'].join(' ')}></div>
        </div>
    );
};

export default LoginBack;

import "../../../styles/pages/login/LoginBack.css";

import { useState, useEffect } from "react";

const LoginBack = () => {
    const [gradation, setGradation] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setGradation(true);
        }, 500);
    },[]);

    return (
        <div id="LoginBack">
            <img src="images/Login_BG.jpeg" alt="Login_Background" />  
            <div className="gradation_box"></div>
            <div className={['loginInitBack', gradation && 'loginGradation'].join(' ')}></div>
        </div>
    );
};

export default LoginBack;

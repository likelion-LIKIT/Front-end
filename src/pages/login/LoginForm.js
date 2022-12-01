import "../../../styles/pages/login/LoginForm.css";

import LoginInput from "./LoginInput";

import { useState, useEffect } from "react";

const LoginForm = () => {
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowForm(true);
        },1200);
    }, []);

    return (
        <div className={["init_form", showForm && "LoginForm"].join(' ')}>
            <div className="loginform_top">로그인</div>
            <div className="loginform_input">
                <LoginInput />
            </div>
            <div className="loginform_bottom">
                <button>로그인</button>
                <div>
                    <input type="checkBox"></input>
                    <span>아이디 저장</span>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;

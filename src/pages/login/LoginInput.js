import "../../../styles/pages/login/LoginInput.css";

const LoginInput = () => {
    return (
        <div id="LoginInput">
            <div>
                <div>아이디</div>
                <input type="text"></input>
            </div>
            <div>
                <div>비밀번호</div>
                <input type="password" autoComplete="new-password"></input>
            </div>
        </div>
    );
};

export default LoginInput;

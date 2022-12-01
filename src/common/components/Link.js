// 작성자 : 이수화

import { useNavigate } from "react-router-dom";

const Link = (props) => {
    const navigate = useNavigate();
    const { children, to } = props;

    return (
        <div id='link' onClick={() => {navigate(to)}}>
            {children}
        </div>
    );
};

export default Link;
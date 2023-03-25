// 작성자 : 이수화

import { useNavigate } from "react-router-dom";

const Link = (props) => {
    const navigate = useNavigate();
    const { children, to, page } = props;

    return (
        <div id='link' onClick={() => {navigate(to)}} className={[`${`/${page}` === to ? 'clicked' : null}`].join('')}>
            {children}
        </div>
    );
};

export default Link;
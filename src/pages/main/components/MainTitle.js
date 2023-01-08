// 작성자: 구현우

import { useEffect, useState } from "react";

import "../styles/MainTitle.css";

const MainTitle = () => {
    const [firstTitle, setFirstTitle] = useState(false);
    const [hiddenState, setHiddenState] = useState(false);
    const [secondTitle, setSecondTitle] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFirstTitle(true);
        }, 100)
        setTimeout(() => {
            setHiddenState(true);
            setSecondTitle(true);
        }, 1600);
    }, [])

    return (
        <div id="MainTitle">
            <div className={["init_first_title", firstTitle && "main_first_title"].join(' ')}>
                "Hack Your Life"
            </div>
            <div className={["init_main_hidden", hiddenState && "main_hidden"].join(' ')}></div>
            <div className={["init_second_title", secondTitle && "main_second_title"].join(' ')}>
                <div>LIKELION K.I.T UNIV.</div>
                <div>"내 아이디어를 내 손으로 실현한다."</div>
            </div>
        </div>
    );
}

export default MainTitle;

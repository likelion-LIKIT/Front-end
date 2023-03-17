// 작성자: 구현우

import Layout from "../../../common/components/Layout";
import MainCalender from "./MainCalender";
import MainNotice from "./MainNotice";
import MainQuick from "./MainQuick";
import MainTitle from "./MainTitle";

import { useEffect, useRef, useState } from "react";

import "../styles/MainPage.css";

const MainPage = () => {
  const [frameState, setFrameState] = useState(false);
  const [noticeHeight, setNoticeHeight] = useState(0);

  const titleRef = useRef();
  const calenderRef = useRef();
  const quickRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setFrameState(true);

      const getNoticeHeight =
        titleRef.current.offsetHeight +
        calenderRef.current.offsetHeight -
        quickRef.current.offsetHeight +
        10;

      setNoticeHeight(getNoticeHeight);
    }, 1600);
  }, []);

  return (
    <div id="MainPage">
      <Layout page="main" id="MainPage_Layout">
        <div id="main_layout">
          <div id="main_layout_left">
            <div ref={titleRef}>
              <MainTitle />
            </div>
            <div ref={calenderRef} className={["init_frame", frameState && "main_frame"].join(" ")}>
              <MainCalender />
            </div>
          </div>
          <div id="main_layout_right">
            <div ref={quickRef} className={["init_frame", frameState && "main_frame"].join(" ")}>
              <MainQuick />
            </div>
            <div className={["init_frame", frameState && "main_frame"].join(" ")}>
              <MainNotice height={noticeHeight} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default MainPage;

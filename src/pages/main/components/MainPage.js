// 작성자: 구현우

import Layout from "../../../common/components/Layout";
import MainCalender from "./MainCalender";
import MainNotice from "./MainNotice";
import MainQuick from "./MainQuick";
import MainTitle from "./MainTitle";
import ScheduleModal from "./ScheduleModal";

import { useEffect, useState } from "react";

import "../styles/MainPage.css";

const MainPage = () => {
  const [frameState, setFrameState] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFrameState(true);
    }, 1600);
  }, []);

  return (
    <div id="MainPage">
      <div>
        <Layout page="main">
          <div className="main_box">
            <div id="main_layout">
              <div id="main_layout_left">
                <div>
                  <MainTitle />
                </div>
                <div className={["init_frame", frameState && "main_frame"].join(" ")}>
                  <MainCalender setShowScheduleModal={setShowScheduleModal} />
                </div>
              </div>
              <div id="main_layout_right">
                <div className={["init_frame", frameState && "main_frame"].join(" ")}>
                  <MainQuick />
                </div>
                <div className={["init_frame", frameState && "main_frame"].join(" ")}>
                  <MainNotice />
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
      <div>
        <ScheduleModal
          show={showScheduleModal}
          onHide={() => setShowScheduleModal(showScheduleModal && !showScheduleModal)}
          width={"500px"}
          height={"500px"}
        />
      </div>
    </div>
  );
};

export default MainPage;

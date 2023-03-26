// 작성자: 구현우

import Layout from "../../../common/components/Layout";
import Title from "../../../common/components/Title";
import MyProfile from "./MyProfile";
import MyReadme from "./MyReadme";
import MyTechnology from "./MyTechnology";
import MyProjects from "./MyProjects";
import MyUtils from "../utils/MyUtils";

import "../styles/MyPage.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MyPage = () => {
  const pageId = useParams();

  const [frameState, setFrameState] = useState(false);
  const [isMe] = useState(MyUtils.checkIsMe(pageId.student_id));
  const [userInfo, setUserInfo] = useState(MyUtils.setUserInfo(pageId.student_id));

  useEffect(() => {
    setTimeout(() => {
      setFrameState(true);
    }, 200);
  }, []);

  return (
    <div className="MyPage">
      <Layout page="my">
        <div id="my_layout">
          <div>
            <Title page="my" name="구현우"></Title>
            <div className={["my_init", frameState && "my_body"].join(" ")}>
              <div>
                <div>
                  <MyProfile isMe={isMe} setUserInfo={setUserInfo} userInfo={userInfo} />
                </div>
                <div>
                  <div>
                    <MyReadme
                      isMe={isMe}
                      setUserInfo={setUserInfo}
                      userInfo={userInfo}
                      description={userInfo.description}
                    />
                  </div>
                  <div>
                    <MyTechnology
                      isMe={isMe}
                      setUserInfo={setUserInfo}
                      userInfo={userInfo}
                      tech_stack={userInfo.tech_stack}
                    />
                  </div>
                  <div>
                    <MyProjects projects={userInfo.projects} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default MyPage;

// 작성자: 구현우

import Layout from "../../../common/components/Layout";
import Title from "../../../common/components/Title";
import OrganizationBox from "./OrganizationBox";

import "../styles/OrganizationPage.css";
import { useState, useEffect } from "react";
import OrganizationUtils from "../utils/OrganizationUtils";

const OrganizationPage = () => {
  const [frameState, setFrameState] = useState(false);

  const [currentInfo] = useState(OrganizationUtils.setCurrentOrganization());
  const [previousInfo, setPreviousInfo] = useState([]);
  const [previousShow, setPreviousShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFrameState(true);
    }, 300);
  }, []);

  const setPrevious = () => {
    setPreviousInfo(OrganizationUtils.setPreviousOrganization());
    setPreviousShow(true);
  };

  const showPreviousInfo = () => {
    if (!previousInfo.length) return;

    const answer = [];

    previousInfo.forEach((info, index) => {
      answer.push(<OrganizationBox key={index} organizationInfo={info} />);
    });

    return answer;
  };

  return (
    <div className="OrganizationPage">
      <Layout page="introduce">
        <div id="Organization_Layout">
          <div>
            <Title page="organization"></Title>
            <div
              className={["organization_body_init", frameState && "organization_body"].join(" ")}
            >
              <OrganizationBox organizationInfo={currentInfo} />
              <button
                className={[
                  "organization_next_btn",
                  previousShow && "hide_organization_next_btn",
                ].join(" ")}
                onClick={() => setPrevious()}
              >
                이전 기수가 궁금하신가요?
              </button>
              <div className={["init_previous", previousShow && "show_previous"].join(" ")}>
                {showPreviousInfo()}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default OrganizationPage;

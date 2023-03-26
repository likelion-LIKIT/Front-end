// 작성자 : 이수화

import { useEffect } from 'react';
import Layout from "../../../../common/components/Layout";
import Title from "../../../../common/components/Title";
import ContentsFrame from "../../../../common/components/ContentsFrame";
import AssignmentCard from "./AssignmentCard";
import { assignmentData } from "../../constant/assignmentData";

const AssignmentPage = () => {

  const getAssignmentData = () => {
    /**
     * todo: 과제 데이터 API 추후 연결 필요
     */
  }

  useEffect(() => {
    getAssignmentData();
  }, []);
  
  return (
    <div className="AssignmentPage">
      <Layout page="assignment">
        <Title page="assignment" />
        <ContentsFrame page="assignment">
          {assignmentData.map((data, idx) => (
            <AssignmentCard key={idx} data={data} />
          ))}
        </ContentsFrame>
      </Layout>
    </div>
  );
};

export default AssignmentPage;

// 작성자 : 이수화

import Layout from "../../../common/components/Layout";
import Title from "../../../common/components/Title";
import ContentsFrame from "../../../common/components/ContentsFrame";

const RegulationPage = () => {
  return (
    <div className="RegulationPage">
      <Layout page="notice">
        <Title page="regulation" />
        <ContentsFrame page="regulation">
          {/* todo: 회칙 사진 넣기 */}
        </ContentsFrame>
      </Layout>
    </div>
  );
};

export default RegulationPage;

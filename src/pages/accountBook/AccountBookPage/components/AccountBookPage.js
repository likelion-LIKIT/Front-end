// 작성자 : 이수화

import { useEffect } from 'react';
import Layout from "../../../../common/components/Layout";
import Title from "../../../../common/components/Title";
import ContentsFrame from "../../../../common/components/ContentsFrame";
import AccountBookCard from "./AccountBookCard";
import { accountBookData } from "../../constant/accountBookData";

const AccountBookPage = () => {

  const getAccountBookData = () => {
    /**
     * todo: 장부 데이터 API 추후 연결 필요
     */
  }

  useEffect(() => {
    getAccountBookData();
  }, []);

  return (
    <div className="AccountBookPage">
      <Layout page="notice">
        <Title page="accountBook" />
        <ContentsFrame page="accountBook">
          {accountBookData.map((data, idx) => (
            <AccountBookCard key={idx} data={data} />
          ))}
        </ContentsFrame>
      </Layout>
    </div>
  );
};

export default AccountBookPage;

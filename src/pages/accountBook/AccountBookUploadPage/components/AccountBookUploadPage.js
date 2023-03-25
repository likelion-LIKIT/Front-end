// 작성자 : 이수화

import { useState, useEffect } from "react";
import "../styles/AccountBookUploadPage.css";
import FormHeader from "../../../../common/components/FormHeader";
import FormTitle from "../../../../common/components/FormTitle";
import FormWriteBox from "../../../../common/components/FormWriteBox";
import Preview from "../../../../common/components/Preview";
import { MarkDownParser } from "../../../notice/NoticeFormPage/utils/MarkDownParser";
import AccountBookUploadModal from './AccountBookUploadModal';

const AccountBookUploadPage = () => {
  const [title, setTitle] = useState();
  const [contents, setContents] = useState("");
  const [parsedContents, setParsedContents] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!contents) return;
    setParsedContents(MarkDownParser(contents));
  }, [contents]);

  return (
    <div className="AccountBookUploadPage">
      <div className="accountBookUploadMain">
        <FormHeader page={"accountBook"} setShowModal={setShowModal} />
        <FormTitle page={"accountBook"} title={title} setTitle={setTitle} />
        <FormWriteBox
          page={"accountBook"}
          contents={contents}
          setContents={setContents}
        />
      </div>
      <div className="accountBookUploadPreView">
        <Preview title={title} contents={parsedContents} />
      </div>
      <AccountBookUploadModal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      />
    </div>
  );
};

export default AccountBookUploadPage;

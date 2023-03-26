// 작성자 : 이수화

import { useState, useEffect } from "react";
import "../styles/NoticeUploadPage.css";
import FormHeader from "../../../../common/components/FormHeader";
import FormTitle from "../../../../common/components/FormTitle";
import FormWriteBox from "../../../../common/components/FormWriteBox";
import Preview from "../../../../common/components/Preview";
import { MarkDownParser } from "../utils/MarkDownParser";
import NotionFormModal from "./NoticeUploadModal";

const NoticeUploadPage = () => {
  const [title, setTitle] = useState();
  const [contents, setContents] = useState("");
  const [parsedContents, setParsedContents] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!contents) return;
    setParsedContents(MarkDownParser(contents));
  }, [contents]);

  return (
    <div className="NoticeUploadPage">
      <div className="noticeUploadMain">
        <FormHeader page={"notice"} setShowModal={setShowModal} />
        <FormTitle page={"notice"} title={title} setTitle={setTitle} />
        <FormWriteBox
          page={"notice"}
          contents={contents}
          setContents={setContents}
        />
      </div>
      <div className="noticeUploadPreView">
        <Preview title={title} contents={parsedContents} />
      </div>
      <NotionFormModal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      />
    </div>
  );
};

export default NoticeUploadPage;

// 작성자 : 이수화

import { useState, useEffect } from "react";
import "../styles/ActivityUploadPage.css";
import FormHeader from "../../../../common/components/FormHeader";
import FormTitle from "../../../../common/components/FormTitle";
import FormWriteBox from "../../../../common/components/FormWriteBox";
import Preview from "../../../../common/components/Preview";
import { MarkDownParser } from "../../../notice/NoticeFormPage/utils/MarkDownParser";

const ActivityUploadPage = () => {
  const [title, setTitle] = useState();
  const [contents, setContents] = useState("");
  const [parsedContents, setParsedContents] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!contents) return;
    setParsedContents(MarkDownParser(contents));
  }, [contents]);

  return (
    <div className="ActivityUploadPage">
      <div className="activityFormMain">
        <FormHeader page={"activity"} setShowModal={setShowModal} />
        <FormTitle page={"activity"} title={title} setTitle={setTitle} />
        <FormWriteBox page={"activity"} contents={contents} setContents={setContents}/>
      </div>
      <div className="activityFormPreView">
        <Preview title={title} contents={parsedContents} />
      </div>
      {/* <NotionFormModal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      /> */}
    </div>
  );
};

export default ActivityUploadPage;

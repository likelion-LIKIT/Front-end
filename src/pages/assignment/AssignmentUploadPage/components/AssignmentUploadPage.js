// 작성자 : 이수화

import { useState, useEffect } from "react";
import "../styles/AssignmentUploadPage.css";
import FormHeader from "../../../../common/components/FormHeader";
import FormTitle from "../../../../common/components/FormTitle";
import FormWriteBox from "../../../../common/components/FormWriteBox";
import Preview from "../../../../common/components/Preview";
import { MarkDownParser } from "../../../notice/NoticeFormPage/utils/MarkDownParser";
import AssignmentUploadModal from "../components/AssignmentUploadModal";

const AssignmentUploadPage = () => {
  const [title, setTitle] = useState();
  const [contents, setContents] = useState("");
  const [parsedContents, setParsedContents] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!contents) return;
    setParsedContents(MarkDownParser(contents));
  }, [contents]);

  return (
    <div className="AssignmentUploadPage">
      <div className="assignUploadMain">
        <FormHeader page={"assignment"} setShowModal={setShowModal} />
        <FormTitle page={"assignment"} title={title} setTitle={setTitle} />
        <FormWriteBox
          page={"assignment"}
          contents={contents}
          setContents={setContents}
        />
      </div>
      <div className="noticeFormPreView">
        <Preview title={title} contents={parsedContents} />
      </div>
      <AssignmentUploadModal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      />
    </div>
  );
};

export default AssignmentUploadPage;

// 작성자 : 이수화

import { useState } from "react";
import "../styles/NoticeFormPage.css";
import FormHeader from "../../../../common/components/FormHeader";
import FormTitle from "../../../../common/components/FormTitle";
import FormWriteBox from "../../../../common/components/FormWriteBox";
import Preview from "../../../../common/components/Preview";

const NoticeFormPage = () => {
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  return (
    <div className="NoticeFormPage">
      <div className="noticeFormMain">
        <FormHeader page={"notice"} />
        <FormTitle page={"notice"} setTitle={setTitle} />
        <FormWriteBox page={"notice"} setContents={setContents} />
      </div>
      <div className="noticeFormPreView">
        <Preview title={title} contents={contents} />
      </div>
    </div>
  );
};

export default NoticeFormPage;

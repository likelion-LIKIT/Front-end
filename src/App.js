// 작성자: 구현우

import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/main/components/MainPage";
import LoginPage from "./pages/login/components/LoginPage";
import IntroducePage from "./pages/introduce/IntroducePage";
import OrganizationPage from "./pages/organization/components/OrganizationPage";
import DevelopmentPage from "./pages/development/DevelopmentPage";
import DevelopmentUploadPage from "./pages/development/DevelopmentUploadPage";
import MyPage from "./pages/my/components/MyPage";
import NoticePage from "./pages/notice/NoticePage/components/NoticePage";
import ActivityPage from "./pages/activity/ActivityPage/components/ActivityPage";
import RegulationPage from "./pages/regulation/components/RegulationPage";
import AssignMentPage from "./pages/assignment/AssignmentPage/components/AssignmentPage";
import AccountBookPage from "./pages/accountBook/AccountBookPage/components/AccountBookPage";
import NoticeDetailPage from "./pages/notice/NoticeDetailPage/components/NoticeDetailPage";
import ActivityDetailPage from "./pages/activity/ActivityDetailPage/components/ActivityDetailPage";
import AssignMentDetailPage from "./pages/assignment/AssignmentDetailPage/components/AssignmentDetailPage";
import AccountBookDetailPage from "./pages/accountBook/AccountBookDetailPage/components/AccountBookDetailPage";
import NoticeUploadPage from "./pages/notice/NoticeFormPage/components/NoticeUploadPage";
import ActivityUploadPage from "./pages/activity/ActivityUploadPage/components/ActivityUploadPage";
import AssignMentUploadPage from "./pages/assignment/AssignmentUploadPage/components/AssignmentUploadPage";
import AccountBookUploadPage from "./pages/accountBook/AccountBookUploadPage/components/AccountBookUploadPage";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/introduce" element={<IntroducePage />} />
        <Route path="/organization" element={<OrganizationPage />} />
        <Route path="/development" element={<DevelopmentPage />} />
        <Route path="/development/upload" element={<DevelopmentUploadPage />} />
        <Route path="/my/:student_id" element={<MyPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/notice/detail/:id" element={<NoticeDetailPage />} />
        <Route path="/notice/upload" element={<NoticeUploadPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/activity/detail/:id" element={<ActivityDetailPage />} />
        <Route path="/activity/upload" element={<ActivityUploadPage />} />
        <Route path="/regulation" element={<RegulationPage />} />
        <Route path="/assignment" element={<AssignMentPage />} />
        <Route path="/assignment/detail/:id" element={<AssignMentDetailPage />} />
        <Route path="/assignment/upload" element={<AssignMentUploadPage />} />
        <Route path="/accountBook" element={<AccountBookPage />} />
        <Route path="/accountBook/detail/:id" element={<AccountBookDetailPage />} />
        <Route path="/accountBook/upload" element={<AccountBookUploadPage />} />
      </Routes>
    </div>
  );
};

export default App;

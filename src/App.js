// 작성자: 구현우

import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/main/components/MainPage";
import LoginPage from "./pages/login/components/LoginPage";
import IntroducePage from "./pages/introduce/IntroducePage";
import OrganizationPage from "./pages/organization/components/OrganizationPage";
import DevelopmentPage from "./pages/development/DevelopmentPage";
import DevelopmentFormPage from "./pages/development/DevelopmentFormPage";
import MyPage from "./pages/my/MyPage";
import NoticePage from "./pages/notice/NoticePage/components/NoticePage";
import ActivityPage from "./pages/activity/ActivityPage/components/ActivityPage";
import RegulationPage from "./pages/regulation/components/RegulationPage";
import AssignMentPage from "./pages/assignment/AssignmentPage/components/AssignmentPage";
import AccountBookPage from "./pages/accountBook/AccountBookPage/components/AccountBookPage";
import NoticeDetailPage from "./pages/notice/NoticeDetailPage/components/NoticeDetailPage";
import ActivityDetailPage from "./pages/activity/ActivityDetailPage/components/ActivityDetailPage";
import AssignMentDetailPage from "./pages/assignment/AssignmentDetailPage/components/AssignmentDetailPage";
import AccountBookDetailPage from "./pages/accountBook/AccountBookDetailPage/components/AccountBookDetailPage";
import NoticeFormPage from "./pages/notice/NoticeFormPage/components/NoticeFormPage";

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
        <Route path="/development/form" element={<DevelopmentFormPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/notice/detail/:id" element={<NoticeDetailPage />} />
        <Route path="/notice/form" element={<NoticeFormPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/activity/detail/:id" element={<ActivityDetailPage />} />
        <Route path="/regulation" element={<RegulationPage />} />
        <Route path="/assignment" element={<AssignMentPage />} />
        <Route path="/assignment/detail/:id" element={<AssignMentDetailPage />} />
        <Route path="/accountBook" element={<AccountBookPage />} />
        <Route path="/accountBook/detail/:id" element={<AccountBookDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;

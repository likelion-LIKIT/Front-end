import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/main/MainPage';
import LoginPage from './pages/login/components/LoginPage';
import IntroducePage from './pages/introduce/IntroducePage';
import OrganizationPage from './pages/organization/OrganizationPage';
import DevelopmentPage from './pages/development/DevelopmentPage';
import DevelopmentFormPage from './pages/development/DevelopmentFormPage';
import MyPage from './pages/my/MyPage';
import NoticePage from './pages/notice/NoticePage/components/NoticePage';
import NoticeDetailPage from './pages/notice/NoticeDetailPage/components/NoticeDetailPage';
import NoticeFormPage from './pages/notice/NoticeFormPage/components/NoticeFormPage';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/introduce" element={<IntroducePage/>}/>
        <Route path="/organization" element={<OrganizationPage/>}/>
        <Route path="/development" element={<DevelopmentPage/>}/>
        <Route path="/development/form" element={<DevelopmentFormPage/>}/>
        <Route path="/my" element={<MyPage/>}/>
        <Route path="/notice" element={<NoticePage/>}/>
        <Route path="/notice/detail/:id" element={<NoticeDetailPage/>}/>
        <Route path="/notice/form" element={<NoticeFormPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

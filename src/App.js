import { Routes, Route } from 'react-router-dom';

import NoticePage from './pages/notice/NoticePage';
import NoticeDetailPage from './pages/notice/NoticeDetailPage';
import NoticeFormPage from './pages/notice/NoticeFormPage';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/notice" element={<NoticePage/>}/>
        <Route exact path="/notice/detail" element={<NoticeDetailPage/>}/>
        <Route exact path="/notice/form" element={<NoticeFormPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

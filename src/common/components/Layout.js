// 작성자 : 이수화

import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Layout.css';

const Layout = (page) => {
    return (
      <div className='Layout'>
        <div id='wrapper'>
          <Header/>
          <Navbar/>
          <div id='page'>
            {page.children}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Layout;
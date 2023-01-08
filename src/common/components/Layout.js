// 작성자 : 이수화

import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Layout.css';

const Layout = (props) => {
    const {children, page} = props;

    return (
      <div className='Layout'>
        <div id='wrapper'>
          <Header page = {page}/>
          <Navbar page = {page}/>
          <div id='page'>
            {children}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Layout;
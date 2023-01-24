// 작성자 : 이수화

import { useEffect, useState } from 'react';

import '../styles/Navbar.css';
import { notShowPage } from '../constant/Navbar';
import { category } from '../constant/Navbar';
import Link from './Link';

const Navbar = ({page}) => {
    const [isHovering, setIsHovering] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const handleMouse = {
      onMouseOver: () => setIsHovering(true),
      onMouseOut: () => setIsHovering(false)
    }

    const makeCategory = () => {
      return Object.entries(category[page].category).map((page, idx) => <Link key={idx} to={`/${page[0]}`}>&nbsp;&nbsp;&nbsp;{page[1]}</Link>)
    }

    const makeNavBar = () => {
      if(category[page]) {
        return (
          <>
            <div className='navTitle'>&nbsp;&nbsp;&nbsp;{category[page].title}</div>
            <div className='navCategory'>
              { makeCategory() }
            </div>
          </>)
      }
    }

    useEffect(() => {
      if(notShowPage.includes(page)) {
        setShowNavbar(false);
      }
    }, [page]);

    return (
      <div className="Navbar">
          {showNavbar && 
            <>
            <div className='navBtn' {...handleMouse}>
                <img src={`${process.env.PUBLIC_URL}/images/Navbar_Arrow.png`} alt='nav button icon'/>
            </div>
            <div className={['navMenuBar', isHovering && 'showNav'].join(' ')} {...handleMouse}>
              {makeNavBar()}
            </div>
          </>}
      </div>
    );
  }
  
  export default Navbar;
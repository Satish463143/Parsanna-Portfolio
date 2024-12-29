import React,{useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true); // Add class when scrolled
    } else {
      setScrolled(false); // Remove class when at top
    }
  };

  
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setMenu("Home");
    } 
    else if (path === "/about_us") {
      setMenu("AboutUs");
    }   
     else {
      setMenu("");
    }


    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [location]);

  
  return (    
      <div className={`navigation ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navigation_grid">
          <div className="navigation_title headers">
            <Link to='/'><h3>Prashanna.</h3></Link>            
          </div>
          <div className='navbar_menu'>
            <nav>
              <ul>
                <Link to='/'>
                  <li  onClick={()=> setMenu('Home')} className={menu === "Home" ? "activeMenu" : ""}>Home</li>
                </Link>
                <Link to='/about_us'>
                  <li onClick={()=> setMenu('AboutUs')} className={menu === "AboutUs" ? "activeMenu" : ""}>About</li>
                </Link>
                <Link>
                  <li>Portfolio</li>
                </Link>
                <Link>
                  <li>Services</li>
                </Link>
                <Link>
                  <li>Contact</li>
                </Link>
                
              </ul>
            </nav>
          </div>
        </div>
      </div>
  )
}

export default Navbar
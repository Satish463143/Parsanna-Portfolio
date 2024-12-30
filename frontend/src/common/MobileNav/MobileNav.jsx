import React,{useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import './MobileNav.css'

const MobileNav = () => {
    const [menu, setMenu] = useState("Home");
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState()

    const toogleMenu =()=>{
        setMenuActive(!menuActive)
    }

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
    else if (path === "/portfolio") {
      setMenu("portfolio");
    }   
    else if (path === "/contact") {
      setMenu("contact");
    }   
    else if (path === "/services") {
      setMenu("services");
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
    <div className={`mobile_nav ${scrolled ? 'mobile_nav_scrolled' : ''}`}>
        <div className="container">
            <div className="mobile_nav_grid">
                <div className={`hamberg_menu ${menuActive && 'active_hamberg_menu '}`}>
                    <div className="three_menu" onClick={toogleMenu}>
                        <div className="first_bar"></div>
                        <div className="second_bar"></div>
                        <div className="third_bar"></div>
                    </div>
                </div>
                <div className="mobile_logo">
                  <Link to='/'><h1 className='headers'>Prashanna</h1></Link>                    
                </div>
                <div className="call_icon">

                </div>
            </div>
        </div>
        <div className="mobile_menu_overlay"></div>
        <div className={`mobile_menu ${menuActive && 'active_mobile_menu'}`}>
           
            <nav>
                <ul>
                    <Link to='/'>
                      <li  onClick={()=> setMenu('Home')} className={menu === "Home" ? "activeMenu" : ""}>Home</li>
                    </Link>
                    <Link to='/about_us'>
                      <li onClick={()=> setMenu('AboutUs')} className={menu === "AboutUs" ? "activeMenu" : ""}>About</li>
                    </Link>
                    <Link to='/portfolio'>
                      <li onClick={()=> setMenu('portfolio')} className={menu === "portfolio" ? "activeMenu" : ""}>Portfolio</li>
                    </Link>
                    <Link to='/services'>
                      <li onClick={()=> setMenu('services')} className={menu === "services" ? "activeMenu" : ""}>Services</li>
                    </Link>
                    <Link to='/contact'>
                      <li onClick={()=> setMenu('contact')} className={menu === "contact" ? "activeMenu" : ""}>Contact</li>
                    </Link>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default MobileNav
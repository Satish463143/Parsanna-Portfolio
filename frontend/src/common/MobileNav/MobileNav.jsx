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
                    <li  onClick={()=> {toogleMenu(); setMenu('Home')}} className={menu === "Home" ? "activeMenu" : ""}>Home</li>
                    </Link>
                    <Link to='/about_us'>
                    <li onClick={()=> {toogleMenu(); setMenu('AboutUs')}} className={menu === "AboutUs" ? "activeMenu" : ""}>About</li>
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
  )
}

export default MobileNav
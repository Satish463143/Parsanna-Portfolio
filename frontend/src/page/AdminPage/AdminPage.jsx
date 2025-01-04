import React,{useState} from 'react'
import { Outlet } from "react-router-dom";
import './AdminPage.css'
import TopNav from '../../CMS/TopNav/TopNav';
import Navbar from '../../CMS/Navbar/Navbar';
import MobileNav from '../../CMS/MobileNav/MobileNav';

const AdminPage = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };
  return (
    <div className='body_grid' >
        <div><Navbar/></div>         
        <div className='body_box'> 
          <TopNav isMenuActive={isMenuActive} toggleMenu={toggleMenu}/>
          <MobileNav isMenuActive={isMenuActive} toggleMenu={toggleMenu}/>              
          <Outlet/>
        </div> 
    </div>
  )
}

export default AdminPage
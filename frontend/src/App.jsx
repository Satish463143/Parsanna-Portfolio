import React, {useEffect} from 'react'
import './App.css'
import Home from './page/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LayoutPage from './page/LayoutPage/LayoutPage';
import AOS from "aos";
import "aos/dist/aos.css";
import AboutPage from './page/AboutPage/AboutPage';
import PortfolioPage from './page/PortfolioPage/PortfolioPage';
import ContactPage from './page/ContactPage/ContactPage';
import ServicePage from './page/ServicePage/ServicePage';

const App = () => {

   useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPage/>}>
          <Route index element={<Home/>}/>
          <Route path='/about_us' element={<AboutPage/>}/>
          <Route path='/portfolio' element={<PortfolioPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/services' element={<ServicePage/>}/>
        </Route>
        <Route path='/admin' >
          {/* //Admin Routes */}
        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App

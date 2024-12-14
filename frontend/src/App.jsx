import React, {useEffect} from 'react'
import './App.css'
import Home from './page/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LayoutPage from './page/LayoutPage/LayoutPage';
import AOS from "aos";
import "aos/dist/aos.css";
import AboutPage from './page/AboutPage/AboutPage';

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
        </Route>
        <Route path='/admin' >
          {/* //Admin Routes */}
        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App

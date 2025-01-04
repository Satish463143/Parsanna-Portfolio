import React, {useEffect, useState} from 'react'
import './App.css'
import Home from './page/Home/Home'
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom';
import LayoutPage from './page/LayoutPage/LayoutPage';
import AOS from "aos";
import "aos/dist/aos.css";
import AboutPage from './page/AboutPage/AboutPage';
import PortfolioPage from './page/PortfolioPage/PortfolioPage';
import ContactPage from './page/ContactPage/ContactPage';
import ServicePage from './page/ServicePage/ServicePage';
import Login from './CMS/Login/Login';
import { useDispatch } from 'react-redux';
import { getLoggedInUser } from './reducer/user.reeducer';
import Dashboard from './CMS/Dashboard/Dashboard';
import AdminPage from './page/AdminPage/AdminPage';
import ProtectedRoute from './CMS/ProtectedRoute';
import ServiceAdd from './CMS/Service/ServiceAdd';
import ServiceEdit from './CMS/Service/ServiceEdit';
import ServiceList from './CMS/Service/ServiceList';
import CategoryAdd from './CMS/Category/CategoryAdd';
import CategoryEdit from './CMS/Category/CategoryEdit';
import CategoryList from './CMS/Category/CategoryList';
import ClientsList from './CMS/Clients/ClientsList';
import ClientsAdd from './CMS/Clients/ClientsAdd';
import ClientsEdit from './CMS/Clients/ClientsEdit';
import FeaturedList from './CMS/Featured/FeaturedList';
import FeaturedAdd from './CMS/Featured/FeaturedAdd';
import FeaturedEdit from './CMS/Featured/FeaturedEdit';
import PortfolioList from './CMS/Portfolio/PortfolioList';
import PortfolioAdd from './CMS/Portfolio/PortfolioAdd';
import PortfolioEdit from './CMS/Portfolio/PortfolioEdit';
import Contact from './CMS/Contact/Contact';

const App = () => {
  const dispatch = useDispatch()

   useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(()=>{
    let token = localStorage.getItem("_at")
    if(token){
      dispatch(getLoggedInUser())
    }
  },[])

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

        <Route path="/admin" element={<Login />} />
        <Route path="/admin/*" element={ <ProtectedRoute>  <AdminPage /> </ProtectedRoute> } >
          <Route path="dashboard" element={<Dashboard />} />          
          <Route path="service" element={<ServiceList />} />          
          <Route path="service_add" element={<ServiceAdd />} />          
          <Route path="service_edit/:id" element={<ServiceEdit />} />   
          <Route path="category" element={<CategoryList />} />          
          <Route path="category_add" element={<CategoryAdd />} />          
          <Route path="category_edit/:id" element={<CategoryEdit />} />   
          <Route path="clients" element={<ClientsList />} />          
          <Route path="clients_add" element={<ClientsAdd />} />          
          <Route path="clients_edit/:id" element={<ClientsEdit />} />   
          <Route path="featured_portfolio" element={<FeaturedList />} />          
          <Route path="featured_portfolio_add" element={<FeaturedAdd />} />          
          <Route path="featured_portfolio_edit/:id" element={<FeaturedEdit />} />   
          <Route path="portfolio" element={<PortfolioList />} />          
          <Route path="portfolio_add" element={<PortfolioAdd />} />          
          <Route path="portfolio_edit/:id" element={<PortfolioEdit />} />   
          <Route path="contacts" element={<Contact />} />  
          
        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App

import React from 'react'
import './App.css'
import Home from './page/Home/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LayoutPage from './page/LayoutPage/LayoutPage';

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPage/>}>
          <Route index element={<Home/>}/>
        </Route>
        <Route path='/admin' >
          {/* //Admin Routes */}
        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App

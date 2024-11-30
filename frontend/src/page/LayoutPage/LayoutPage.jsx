import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../common/Footer/Footer'

const LayoutPage = () => {
  return (
    <div>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default LayoutPage
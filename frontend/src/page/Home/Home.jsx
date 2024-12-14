import React from 'react'
import VideoBanner from '../../component/HomeComponent/VideoBanner/VideoBanner'
import IntroBanner from '../../component/HomeComponent/IntroBanner/IntroBanner'
import Portfolio from '../../component/HomeComponent/Portfolio/Portfolio'
import ServiceSection from '../../component/HomeComponent/ServiceSection/ServiceSection'
import OurClients from '../../component/HomeComponent/OurClients/OurClients'

const Home = () => {
  return (
    <div>
        <VideoBanner/>
        <IntroBanner/>
        <Portfolio/>
        <ServiceSection/>
        <OurClients/>
    </div>
  )
}

export default Home
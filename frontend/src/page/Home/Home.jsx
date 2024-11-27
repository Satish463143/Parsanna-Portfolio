import React from 'react'
import VideoBanner from '../../component/VideoBanner/VideoBanner'
import IntroBanner from '../../component/IntroBanner/IntroBanner'
import Portfolio from '../../component/Portfolio/Portfolio'
import ServiceSection from '../../component/ServiceSection/ServiceSection'
import OurClients from '../../component/OurClients/OurClients'

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
import React from 'react'

import Banners from '../../common/Banners/Banners'
import bannerImg from '../../assets/images/images.jpg'
import Title from '../../common/Title/Title'
import ServicesBox from '../../component/Services/ServicesBox'
import ServiceContact from '../../component/Services/ServiceContact'
import video from '../../assets/images/Rafting.mp4'
import BookService from '../../component/Services/BookService'

const ServicePage = () => {
    
  return (
    <div>
        <Banners image={bannerImg} title='It All Start In Here' content='here goes the contet of the Service us page'/>  
        <Title title='Service'content='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'/>     
        <ServicesBox/> 
        <ServiceContact/>
        <div className="service_video" data-aos="fade-left"><video src={video} autoPlay loop muted></video></div>
        
        <BookService/>
    </div>
  )
}

export default ServicePage
import React from 'react'
import Banners from '../../common/Banners/Banners'
import bannerImg from '../../assets/images/images.jpg'
import AboutContent from '../../component/AboutComponent/AboutContent/AboutContent'
import AboutVideo from '../../component/AboutComponent/AboutVideo/AboutVideo'

const AboutPage = () => {
  return (
    <div>
        <Banners image={bannerImg} title='It All Start In Here' content='here goes the contet of the about us page'/>
        <AboutContent/>  
        <AboutVideo/>      
    </div>
  )
}

export default AboutPage
import React from 'react'
import Banners from '../../common/Banners/Banners'
import bannerImg from '../../assets/images/images.jpg'
import AboutContent from '../../component/AboutComponent/AboutContent/AboutContent'
import AboutVideo from '../../component/AboutComponent/AboutVideo/AboutVideo'
import Experiences from '../../component/AboutComponent/Experiences/Experiences'
import GetInTouch from '../../component/AboutComponent/GetInTouch/GetInTouch'

const AboutPage = () => {
  return (
    <div>
        <Banners image={bannerImg} title='It All Start In Here' content='here goes the contet of the about us page'/>
        <AboutContent/>  
        <AboutVideo/>   
        <Experiences/>
        <GetInTouch/>   
    </div>
  )
}

export default AboutPage
import React from 'react'
import './VideoBanner.css'
import desktopVideo from '../../../assets/images/Rafting.mp4'
import mobileVideo from '../../../assets/images/mobile video.mp4'
import mobileImage from '../../../assets/images/mobile.png'
import desktopImage from '../../../assets/images/desktop.png'

const VideoBanner = () => {
  return (
    <div className='video_banner'>
      <div className='video'>
        <video className='desktop' src={desktopVideo} autoPlay loop muted></video>
        <video className='mobile' src={mobileVideo} autoPlay loop muted></video>
        <div className='images'>
          <img className='mobile' src={mobileImage} alt="" />
          <img className='desktop' src={desktopImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default VideoBanner
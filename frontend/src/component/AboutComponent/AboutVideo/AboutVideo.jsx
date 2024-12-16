import React from 'react'
import './AboutVideo.css'
import video from '../../../assets/images/Rafting.mp4'

const AboutVideo = () => {
  return (
    <div>
        <div className="about_video">
            <video src={video} autoPlay muted loop></video>
        </div>
    </div>
  )
}

export default AboutVideo
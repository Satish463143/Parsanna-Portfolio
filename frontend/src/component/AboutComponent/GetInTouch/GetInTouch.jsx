import React from 'react'
import './GetInTouch.css'
import image from '../../../assets/images/depositphotos.jpg'
import {Link} from 'react-router-dom'

const GetInTouch = () => {
  return (
    <div className='get_in_touch'>
        <div className="get_in_touch_img">
            <img src={image} alt="" />
        </div> 
        <div className="overlay_image"></div>  
        <div className="get_in_touch_content"  data-aos="zoom-in">
            <h1 className='bold_fonts'>Lets work together</h1>
            <p><Link>Get in Touch</Link></p>
        </div>             
    </div>
  )
}

export default GetInTouch
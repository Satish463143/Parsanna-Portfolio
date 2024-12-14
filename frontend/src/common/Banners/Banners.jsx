import React from 'react'
import './Banners.css'

const Banners = ({image, title, content}) => {
  return (
    <div className='banners'>
      <div className="banner_img">
        <img src={image} alt="" />
      </div> 
      <div className='banner_image_overlay'></div>
      <div className="container"> 
        <div className='banner_content'> 
          <div>
            <h1 className='bold_fonts'>{title}</h1>
            <p>{content}</p>
          </div>
        </div> 
      </div>   
    </div>
  )
}

export default Banners
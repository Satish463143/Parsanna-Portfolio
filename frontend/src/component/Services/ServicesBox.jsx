import React from 'react'
import './Services.css'
import image from '../../assets/images/photo.jpg'
const ServicesBox = () => {
    const service = [
        {
            _id:1,
            title:"Editing",
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image:''
        },
        {
            _id:2,
            title:"Sound Design",
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image:''
        },
        {
            _id:3,
            title:"Color Correction",
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image:''
        },
    ]
  return (
    <div className='container'>
        <div className="serviceBox_grid">
            {service.length > 0 && 
                service.map((item, index) => (
                    <>
                        <div className="serviceBox_grid_box">
                            <img src={image} alt="" />
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    </>
                ))
            }               
        </div>        
    </div>
  )
}

export default ServicesBox
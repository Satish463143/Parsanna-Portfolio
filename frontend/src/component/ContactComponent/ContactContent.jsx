import React, { useState } from 'react'
import './ContactComponent.css'
import image from '../../assets/images/prashanna.jpg'
import ContactForm from './ContactForm'

const ContactContent = () => {
    const [loading, setLoading] = useState()

    const submitEvent = ()=>{

    }
  return (
    <div className='container'>
        <div className="ContactContent_grid">
            <div className="ContactContent_grid_img" data-aos="fade-right">
                <img src={image} alt="" />
            </div>
            <div className="ContactContent_grid_form" data-aos="fade-left">
                <div className="ContactContent_grid_form_content">
                    <h1>Drop Me a Line</h1>
                    <p>Have a question or want to book a media session with me? Send a <a href="">text</a> , give me a <a href="">call</a> , email me at <a href="">prashnna@gmial.com</a>, or submit the form below. I'm looking forward to hearing from you!</p>
                </div>
                <ContactForm submitEvent={submitEvent} loading={loading} value='Send Message'/>
            </div>
        </div>
                
    </div>
  )
}

export default ContactContent
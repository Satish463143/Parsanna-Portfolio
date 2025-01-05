import React, { useState } from 'react'
import './ContactComponent.css'
import image from '../../assets/images/prashanna.jpg'
import ContactForm from './ContactForm'
import { useCreateMutation } from '../../api/contact.api'
import { toast, ToastContainer } from 'react-toastify'

const ContactContent = () => {
    const [loading, setLoading] = useState()

    const [createContact] = useCreateMutation()

    const submitEvent = async(data)=>{
        setLoading(true)
        try{
            const submitData = {
                ...data
            }
            await createContact(submitData).unwrap()
            setTimeout(()=>toast.success('Thank you for contacting. Will get back to you soon'),500)
              
        }catch(exception){
            console.log(exception)
            toast.error('Error while sending message')
        }
        finally{
            setLoading(false)
        }


    }
  return (
    <div className='container'>
        <ToastContainer/>
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
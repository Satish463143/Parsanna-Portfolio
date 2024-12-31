import React from 'react'
import ContactBanner from '../../component/ContactComponent/ContactBanner'
import ContactForm from '../../component/ContactComponent/ContactForm'
import ContactContent from '../../component/ContactComponent/ContactContent'

const ContactPage = () => {
  return (
    <div>
      <ContactBanner/>
      <ContactContent/>
    </div>
  )
}

export default ContactPage
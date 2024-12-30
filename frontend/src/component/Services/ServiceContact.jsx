import React from 'react'
import './Services.css'
import {Link} from 'react-router-dom'

const ServiceContact = () => {
  return (
    <div className='container'>
        <div className="service_contact_grid">
            <h1>Have different requirements for your project?</h1>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</p>
            <div className='service_contact_grid_button'><Link to='/contact'><h5>Contact Me</h5></Link></div>            
        </div>
    </div>
  )
}

export default ServiceContact
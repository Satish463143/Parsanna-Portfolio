import React from 'react'
import Title from '../../common/Title/Title'
import './OurClients.css'
const OurClients = () => {
  return (
    <div>
         <Title 
        title="Our Clients" 
        content='"Trusted by brands and individuals alike, delivering exceptional visual stories that leave a lasting impact."'
        />

        <div className='clients'>
            <div className="container">
                <div className="clients_title">
                    <div><p>Trusted By The Best</p></div>
                    <div className="clients_line"></div>
                </div>
                <div className="clients_content">
                    <h1>The world's leading designer use and love semplice</h1>
                </div>
                <div className="clients_links">
                    <div> <span></span><p>Trusted By The Best</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurClients
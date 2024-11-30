import React from 'react'
import Title from '../../common/Title/Title'
import './OurClients.css'


const OurClients = () => {
    
    const logos = [
        {
            link:'www.google.com',
            logo:'../src/assets/images/one.png'
        },
        {
            link:'www.google.com',
            logo:'../src/assets/images/two.png'
        },
        {
            link:'www.google.com',
            logo:'../src/assets/images/three.png'
        },
        {
            link:'www.google.com',
            logo:'../src/assets/images/four.png'
        },
        {
            link:'www.google.com',
            logo:'../src/assets/images/five.png'
        },
        {
            link:'www.google.com',
            logo:'../src/assets/images/six.png'
        },

    ]
    const translationDistance = `${250 * logos.length}px`;
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
                <div className="clients_content" data-aos="zoom-out">
                    <h1>The world's leading designer use and love semplice</h1>
                </div>
                <div className="clients_links">
                    <div style={{display:'flex', gap:'5px', alignItems:'center'}}> 
                        <p style={{color:'var(--sec_color)', fontWeight:'600'}} >                            
                            See their portfolios
                        </p>
                        <span>
                            <svg
                                height="20px"
                                width="20px"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                style={{ enableBackground: "new 0 0 512 512" }}
                            >
                                <path
                                d="M322.7,128.4L423,233.4c6,5.8,9,13.7,9,22.4c0,8.7-3,16.5-9,22.4L322.7,383.6c-11.9,12.5-31.3,12.5-43.2,0  c-11.9-12.5-11.9-32.7,0-45.2l48.2-50.4h-217C93.7,288,80,273.7,80,256c0-17.7,13.7-32,30.6-32h217l-48.2-50.4  c-11.9-12.5-11.9-32.7,0-45.2C291.4,115.9,310.7,115.9,322.7,128.4z"
                                fill="#808080"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="logo_slider">
                    <div className="slider">
                        <div
                            className="slide-track"
                            style={{
                                width: `${250 * logos.length * 2}px`, // Original + duplicate
                                '--scroll-distance': translationDistance, // Custom CSS variable for keyframes
                            }}
                        >
                            {logos.map((item, index) => (
                                <div className="slide" key={`original-${index}`}>
                                    <a href={item.link} target='_blank'>
                                        <img src={item.logo} height="auto" width="200" alt="" />
                                    </a>
                                </div>
                            ))}
                            {logos.map((item, index) => (
                                <div className="slide" key={`duplicate-${index}`}>
                                    <a href={item.link} target='_blank'>
                                        <img src={item.logo} height="auto" width="200" alt="" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurClients
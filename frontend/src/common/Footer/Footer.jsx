import React from 'react'
import './Footer.css'
import footerVideo from '../../assets/images/Rafting.mp4'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_video">
            <video src={footerVideo} autoPlay loop muted></video>
            <div className="footer_overlay"></div>
            <div className="footer_content">
                <div className="container" data-aos="zoom-in-down">
                    <div className="footer_content_title">
                        <h1 className='bold_fonts'>
                            discover your <br /> brand's story - verse                            
                        </h1>
                        <span>Lets <br /> Meet</span>
                    </div>
                    
                </div>
            </div>
            <div className="footer_copyright">
                <div className="container">
                    <hr />
                    <div className="footer_grid">
                        <div className="footer_copy">
                            <p>Copyright 2024 - Prashanna Bajracharya</p>
                        </div>
                        <div className="footer_name">
                            <h1 className='headers'>Prashanna</h1>
                            <p>Bajracharya</p>
                        </div>
                        <div className="footer_develop">
                            <p>Designed & Developed by Bleeding Tech</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Footer
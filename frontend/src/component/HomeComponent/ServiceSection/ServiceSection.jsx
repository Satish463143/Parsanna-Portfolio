import React from 'react'
import './ServiceSection.css'
import Title from '../../../common/Title/Title'
import media_production from '../../../assets/images/media_production.jpg'
import photo from '../../../assets/images/photo.jpg'
import digital_content from '../../../assets/images/digital-marketing-bs-header-image.jpeg'
const ServiceSection = () => {
    window.addEventListener('scroll', () => {
        const stickyDiv = document.querySelector('.sticky-div');
        const rect = stickyDiv.getBoundingClientRect();
      
        if (rect.top === 0) {
          stickyDiv.classList.add('zoomed');
        } else {
          stickyDiv.classList.remove('zoomed');
        }
      });
  return (
    <div>
        <Title 
        title="Services" 
        content='"Transforming ideas into stunning visuals, with every shot and every frame telling a story of its own."'
        />
        <div style={{marginTop:'50px'}}>
          <div className="sticky-div service_box">
            <div className="container" data-aos="fade-right">
              <div className="service_box_grid">
                <div className="service_number"> <h1 className='bold_fonts'>1</h1></div>
                <div className="service_content">
                  <h1>media production</h1>
                  <p>From concept to creation, we bring your vision to life. We plan, design, and execute content to meet your needs.</p>
                </div>
                <div className="service_image">
                  <img src={media_production} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="sticky-div service_box" style={{background:"var(--black)"}}>
            <div className="container"data-aos="fade-right" >
              <div className="service_box_grid">
                <div className="service_number"> <h1  className='bold_fonts' style={{color:'var(--pri_color)'}}>2</h1></div>
                <div className="service_content">
                  <h1 style={{color:'var(--pri_color)'}}>photography & videography</h1>
                  <p style={{color:'var(--sec_color)'}}>We offer professional photography services to capture special moments and create beautiful images.</p>
                </div>
                <div className="service_image">
                  <img src={photo} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="sticky-div service_box">
            <div className="container" data-aos="fade-right" >
              <div className="service_box_grid">
                <div className="service_number"> <h1 className='bold_fonts'>3</h1></div>
                <div className="service_content">
                  <h1>digital content</h1>
                  <p>We craft captivating digital content for brands. From trendy reels and social media stories to eye-catching teasers and promotional videos, we bring your brand to life. We also specialize in on-the-ground live coverage, capturing the energy and excitement of your events.</p>
                </div>
                <div className="service_image">
                  <img src={digital_content} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ServiceSection
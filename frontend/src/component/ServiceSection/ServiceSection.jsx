import React from 'react'
import './ServiceSection.css'
import Title from '../../common/Title/Title'
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
        <div className="container">
            <div className="sticky-div">I zoom when I stick!</div>
            <div className="content">
                <p>Content scrolling over...</p>
                <p>More content...</p>
                <p>Even more content...</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceSection
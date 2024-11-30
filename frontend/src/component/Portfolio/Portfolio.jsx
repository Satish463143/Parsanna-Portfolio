import React from 'react'
import './Portfolio.css'
import Title from '../../common/Title/Title'
import oneImage from '../../assets/images/mood-board-3-1.jpg'
import twoImage from '../../assets/images/photography.jpg'
import threeImage from '../../assets/images/musicVideo.jpeg'
import firstVideo from '../../assets/images/Rafting.mp4'
import SeeMore from '../../common/SeeMore/SeeMore'
const Portfolio = () => {
  return (
    <div>
        <Title 
        title="Portfolio" 
        content='"A showcase of moments captured with creativity, precision, and passion—bringing stories to life through photography and videography."'
        />
        <div className="container">
            <div className='portfolio_box'>
                <div className='portfolio_grid'> 
                <div className="portfolio_content">
                    <div className="first_grid" style={{height:'200px'}} data-aos="zoom-in">
                        <img src={twoImage} alt="" />   
                    </div>
                    <div className="second_grid_photo">
                        <img data-aos="zoom-in" src={twoImage} alt="" /> 
                        <img data-aos="zoom-in" src={twoImage} alt="" /> 
                    </div>
                    <div className="second_grid_photo_third" data-aos="zoom-in">
                        <img src={twoImage} alt="" /> 
                    </div>
                    
                    <h1>Photography</h1>
                    <p>Capturing the beauty of life, one moment at a time, blending artistry and technique to create timeless images.</p>
                </div>
                <div className="portfolio_content">
                    <div className="first_grid" style={{height:'150px'}} data-aos="zoom-in">
                        <img src={twoImage} alt="" />   
                    </div>
                    <div className="second_grid_photo second_column" >
                        <img data-aos="zoom-in" src={twoImage} alt="" /> 
                        <img data-aos="zoom-in" src={twoImage} alt="" /> 
                    </div>
                    <div className="first_grid" style={{height:'200px'}} data-aos="zoom-in">
                        <img src={twoImage} alt="" />   
                    </div>
                    <h1>Commercial </h1>
                    <p>Crafting powerful visuals that connect brands with their audience, 
                        delivering impact and creativity in every frame.</p>
                </div>
                    
                </div>
                <div>
                    <div className="portfolio_content portfolio_content_2nd" data-aos="zoom-in">
                        <div className="first_grid">
                            <video src={firstVideo} autoPlay loop muted></video>
                        </div>
                        <div className="second_grid">
                            <div className="second_first_grid" data-aos="zoom-in">
                                <video src={firstVideo} autoPlay loop muted></video>
                            </div>
                            <div className="second_second_grid">
                                <div style={{height:'200px'}} data-aos="zoom-in">
                                    <img height='200px' src={twoImage} alt="" />
                                </div>
                                <div className='second_second_grid_image' data-aos="zoom-in">
                                    <img height='200px' src={twoImage} alt="" />
                                </div>
                            </div>
                        </div>
                       
                        <div>
                            <h1>Music Video</h1>
                            <p>Transforming melodies into captivating visuals, creating cinematic stories that resonate with emotion and rhythm.</p>                   
                        </div>
                    </div>
                </div>
            </div>
            <SeeMore content='See More' link='portfolio'/>
        </div>
    </div>
  )
}

export default Portfolio
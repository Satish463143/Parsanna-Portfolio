import React from 'react'
import './AboutContent.css'
import prashanna from '../../../assets/images/prashanna.jpg'

const AboutContent = () => {
  return (
    <div className='container'>
        <div className="about_content_grid">
            <div className="about_content_box" data-aos="fade-right">
                <div className="about_content_img">
                    <img src={prashanna} alt="" />
                </div>
            </div>
            <div className="about_content_box_2" data-aos="fade-left">
                <h1 >About Me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias soluta mollitia facere. Rerum ea beatae fugit nesciunt temporibus hic, neque molestias. Sequi nemo nostrum dicta dolor neque vel natus accusantium?</p><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero unde beatae explicabo non nihil natus quae tempore odit? Recusandae odit obcaecati debitis porro laborum, ad laudantium quae fugiat natus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero unde beatae explicabo non nihil natus quae tempore odit? Recusandae odit obcaecati debitis porro laborum, ad laudantium quae fugiat natus!</p><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero unde beatae explicabo non nihil natus quae tempore odit? Recusandae odit obcaecati debitis porro laborum, ad laudantium quae fugiat natus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero unde beatae explicabo non nihil natus quae tempore odit? Recusandae odit obcaecati debitis porro laborum, ad laudantium quae fugiat natus!</p>

            </div>
        </div>        
    </div>
  )
}

export default AboutContent
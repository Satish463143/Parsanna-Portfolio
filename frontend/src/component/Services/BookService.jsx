import React from 'react'
import image from '../../assets/images/musicVideo.jpeg'
import './Services.css'

const BookService = () => {
  return (
    <div className='container'>
      <div className="bookService_grid">
        <div className="bookService_grid_img" data-aos="flip-right">
          <img src={image} alt="" />
        </div>
        <div className="bookService_grid_content" data-aos="flip-left">
          <h1>Why book my service?</h1>
          <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure</p>
          <li>
            <span>
              <svg
                id="Icons"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  fill="#D77DAA"
                  d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm5.707,8.707-7,7a1,1,0,0,1-1.414,0l-3-3a1,1,0,0,1,1.414-1.414L10,14.586l6.293-6.293a1,1,0,0,1,1.414,1.414Z"
                />
              </svg>
            </span>
            <p>Lorem ipsum dolor sit amet</p>
          </li>
          <li>
            <span>
              <svg
                id="Icons"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  fill="#D77DAA"
                  d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm5.707,8.707-7,7a1,1,0,0,1-1.414,0l-3-3a1,1,0,0,1,1.414-1.414L10,14.586l6.293-6.293a1,1,0,0,1,1.414,1.414Z"
                />
              </svg>
            </span>
            <p>Lorem ipsum dolor sit amet</p>
          </li>
          <li>
            <span>
              <svg
                id="Icons"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  fill="#D77DAA"
                  d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm5.707,8.707-7,7a1,1,0,0,1-1.414,0l-3-3a1,1,0,0,1,1.414-1.414L10,14.586l6.293-6.293a1,1,0,0,1,1.414,1.414Z"
                />
              </svg>
            </span>
            <p>Lorem ipsum dolor sit amet</p>
          </li>
          <li>
            <span>
              <svg
                id="Icons"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  fill="#D77DAA"
                  d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm5.707,8.707-7,7a1,1,0,0,1-1.414,0l-3-3a1,1,0,0,1,1.414-1.414L10,14.586l6.293-6.293a1,1,0,0,1,1.414,1.414Z"
                />
              </svg>
            </span>
            <p>Lorem ipsum dolor sit amet</p>
          </li>
        </div>
      </div>
    </div>
  )
}

export default BookService
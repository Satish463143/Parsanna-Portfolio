import React from 'react'
import './IntroBanner.css'
import {Link} from 'react-router-dom'
import logo from '../../../assets/images/logo.png'

const IntroBanner = () => {
  return (
    <div className='intro_banner'>
      <div className="intro_title" >
        <img src={logo} alt="" />
      </div>
      <div className='navbar'>
        <nav>
          <ul>
            <Link to='/'>
              <li className='activeMenu'>Home</li>
            </Link>
            <Link to='/about_us'>
              <li>About</li>
            </Link>
            <Link>
              <li>Portfolio</li>
            </Link>
            <Link>
              <li>Services</li>
            </Link>
            <Link>
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="container">
        <div className='intro_content' data-aos="zoom-in">
          <h1>Framing Moments</h1> <br />
          <h2>Creating Memories</h2> <br />
          <h3>Capturing Life's Moments</h3>
          <div className='sub_content'>
            <p>Prasanna Bajracharya</p>
            <span>Professional Photographer and Videographer</span>
          </div>
          
        </div>
      </div>
      <div className="social_links" data-aos="fade-right">
        <div className="container">
          <p>Connect With Me.</p>
          <ul> 
            <li >
              <a href="https://drive.google.com/file/d/1C19wGLtOJ1KzzfSjhjodvLiwCt4_W9SM/view?pli=1" target='_blank' >
                <span>
                  <svg
                    height="29"
                    width='29'
                    style={{
                      shapeRendering: 'geometricPrecision',
                      textRendering: 'geometricPrecision',
                      imageRendering: 'optimizeQuality',
                      fillRule: 'evenodd',
                      clipRule: 'evenodd',
                    }}
                    version="1.1"
                    viewBox="0 0 846.66 846.66"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <style type="text/css">
                        {`
                          .fil0 {fill:#D77DAA; fill-rule:nonzero;}
                        `}
                      </style>
                    </defs>
                    <g id="Layer_x0020_1">
                      <path
                        className="fil0"
                        d="M186.1 100.56l151.36 0 0 -69.44c0,-11.4 9.25,-20.64 20.65,-20.64l457.07 0c11.4,0 20.64,9.24 20.64,20.64l0 595.73c0,11.4 -9.24,20.65 -20.64,20.65l-109.8 0 0 168.04c0,11.4 -9.24,20.64 -20.64,20.64l-653.26 0c-11.4,0 -20.64,-9.24 -20.64,-20.64l0 -539.72c0,-96.44 78.82,-175.26 175.26,-175.26zm192.65 0l151.37 0c96.44,0 175.26,78.82 175.26,175.26l0 330.39 89.15 0 0 -554.44 -415.78 0 0 48.79zm-215.79 441.86c-27.16,0 -27.16,-41.29 0,-41.29l390.3 0c27.16,0 27.16,41.29 0,41.29l-390.3 0zm0 160.49c-27.16,0 -27.16,-41.29 0,-41.29l390.3 0c27.16,0 27.16,41.29 0,41.29l-390.3 0zm0 -80.24c-27.16,0 -27.16,-41.29 0,-41.29l390.3 0c27.16,0 27.16,41.29 0,41.29l-390.3 0zm195.15 -411.7c50.74,0 91.88,41.14 91.88,91.88 0,17.21 -4.73,33.31 -12.97,47.08 23.93,22.07 37.53,52.95 37.53,85.57 0,27.16 -41.29,27.16 -41.29,0 0,-21.39 -8.93,-41.49 -24.75,-55.81 -14.47,9.5 -31.79,15.04 -50.4,15.04 -18.61,0 -35.93,-5.54 -50.4,-15.04 -15.83,14.32 -24.76,34.42 -24.76,55.81 0,27.16 -41.29,27.16 -41.29,0 0,-32.61 13.6,-63.51 37.54,-85.56 -8.24,-13.77 -12.97,-29.88 -12.97,-47.09 0,-50.74 41.14,-91.88 91.88,-91.88zm0 41.29c-27.94,0 -50.59,22.65 -50.59,50.59 0,27.94 22.64,50.59 50.59,50.59 27.94,0 50.59,-22.65 50.59,-50.59 0,-27.94 -22.65,-50.59 -50.59,-50.59zm172.01 -110.41l-344.02 0c-73.64,0 -133.97,60.33 -133.97,133.97l0 519.07 611.96 0 0 -519.07c0,-73.64 -60.33,-133.97 -133.97,-133.97z"
                      />
                    </g>
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/prashannabajracharya/" target='_blank'>
                <span>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    height='30' width='30'
                    y="0px"
                    viewBox="0 0 56.7 56.7"
                    enableBackground="new 0 0 56.7 56.7"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
                        c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
                        fill="#D77DAA"
                      />
                      <circle cx="41.5" cy="16.4" r="2.9" fill="#D77DAA" />
                      <path
                        d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
                        h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
                        s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
                        c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
                        fill="#D77DAA"
                      />
                    </g>
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@untitledNepal?themeRefresh=1" target='_blank'>
                <span>
                  <svg height='35' width='35' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <g data-name="youtube youtuber video play" id="youtube_youtuber_video_play">
                      <path
                        d="M30,12a5.71,5.71,0,0,0-5.31-5.7C18.92,6,13.06,6,7.33,6.28,4.51,6.28,2,9,2,12a43.69,43.69,0,0,0,0,8.72,5.32,5.32,0,0,0,5.28,5.33h0q4.35.24,8.72.24t8.67-.23A5.34,5.34,0,0,0,30,20.8,31.67,31.67,0,0,0,30,12Zm-2,8.63a.49.49,0,0,0,0,.12,3.36,3.36,0,0,1-3.39,3.34,166,166,0,0,1-17.28,0A3.36,3.36,0,0,1,4,20.65a42,42,0,0,1,0-8.47.45.45,0,0,0,0-.11A3.78,3.78,0,0,1,7.38,8.28c2.86-.13,5.74-.19,8.62-.19s5.76.06,8.62.19h.05c1.71,0,3.33,1.84,3.33,3.79a.76.76,0,0,0,0,.15A30.11,30.11,0,0,1,28,20.61Z"
                        fill="#D77DAA"
                      />
                      <path
                        d="M20.79,15.51l-7.14-3.68a1,1,0,1,0-.92,1.78l5.43,2.79-4,2.07V16.4a1,1,0,0,0-2,0v3.72a1,1,0,0,0,1,1,1,1,0,0,0,.46-.11l7.14-3.72a1,1,0,0,0,.54-.89A1,1,0,0,0,20.79,15.51Z"
                        fill="#D77DAA"
                      />
                    </g>
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/prashannabajracharya/" target='_blank'>
                <span>
                  <svg
                    height="25px"
                    version="1.1"
                    viewBox="0 0 20 20"
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g fill="none" fillRule="evenodd" id="Icons" stroke="none" strokeWidth="1">
                      <g id="Shape" transform="translate(-2.000000, -2.000000)">
                        <line
                          stroke="#D77DAA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          x1="8"
                          x2="8"
                          y1="11"
                          y2="17"
                        />
                        <path
                          d="M8.00439261,7 C8.55667736,7 9.00439261,7.44771525 9.00439261,8 C9.00439261,8.51283584 8.61835242,8.93550716 8.12101374,8.99327227 L8.00439261,9 C7.44771525,9 7,8.55228475 7,8 C7,7.48716416 7.38604019,7.06449284 7.88337887,7.00672773 L8.00439261,7 Z"
                          fill="#D77DAA"
                          fillRule="nonzero"
                        />
                        <line
                          stroke="#D77DAA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          x1="11"
                          x2="11"
                          y1="11"
                          y2="17"
                        />
                        <path
                          d="M11,17 L11,14 C11,12.3431458 12.3431458,11 14,11 C15.6568542,11 17,12.3431458 17,14 L17,17 L17,17"
                          stroke="#D77DAA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M6,3 L18,3 C19.6568542,3 21,4.34314575 21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 Z"
                          stroke="#D77DAA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
            </li>              
          </ul>
        </div>
      </div>
    </div>
  )
}

export default IntroBanner
import React from 'react'
import './Title.css'

const Title = ({title, content}) => {
  return (
    <div className='main_title' data-aos="fade-up">
      <h1>&lt; {title} &gt;</h1>
      <p>{content}</p>
    </div>
  )
}

export default Title
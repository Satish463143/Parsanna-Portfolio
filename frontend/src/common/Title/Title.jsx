import React from 'react'
import './Title.css'

const Title = ({title, content}) => {
  return (
    <div className='main_title'>
      <h1>&lt; {title} &gt;</h1>
      <p>{content}</p>
    </div>
  )
}

export default Title
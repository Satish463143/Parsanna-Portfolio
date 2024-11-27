import React from 'react'
import './SeeMore.css'
import { Link } from 'react-router-dom'

const SeeMore = ({link, content}) => {
  return (
    <div className='seemore_btn'>
        <button>
            <Link to={`/${link}`}>
                {content}<span> &gt;</span>
            </Link>
        </button>
    </div>
  )
}

export default SeeMore
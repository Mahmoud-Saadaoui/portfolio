import React from 'react'
import './scroll.css'
import { Link } from 'react-scroll'

function Scroll() {
  return (
    <div className='scroll'>
      <Link to="home" spy={true} smooth={true} offset={-10} duration={500} className="scroll_arrow">
        <i className='bx bx-up-arrow-alt scroll-to-top'></i>
      </Link>
    </div>
  )
}

export default Scroll

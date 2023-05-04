import React from 'react'
import { Link } from 'react-scroll'

function Data() {
  return (
    <div className='home_data'>
      <h1 className="home_title">Forkan</h1>
      <h3 className="home_subtitle">Front End Developper</h3>
      <p className="home_description">
        I'm React Front End Developper based in Tunisia, and I'm very passionate and dedicated to my work.
      </p>
      <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className="button button--flex">Say Hello</Link>
    </div>
  )
}

export default Data

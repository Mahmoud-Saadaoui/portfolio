import React from 'react'
import './skills.css'
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'

function Skills() {
  return (
    <section className='skills section' id='skills'>
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical level</span>
      <div className="skills_container container grid">
        <FrontEnd/>
        <BackEnd/>
      </div>
    </section>
  )
}

export default Skills

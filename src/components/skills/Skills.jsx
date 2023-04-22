import React from 'react'
import './skills.css'
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'
import SectionTitle from '../section-title/SectionTitle'

function Skills() {
  return (
    <section className='skills section' id='skills'>
      <SectionTitle
        title = 'Skills'
        subtitle = 'My Technical level'
      />
      <div className="skills_container container grid">
        <FrontEnd/>
        <BackEnd/>
      </div>
    </section>
  )
}

export default Skills

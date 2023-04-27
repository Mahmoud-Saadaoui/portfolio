import React from 'react'
import './skills.css'
import Frameworks from './Frameworks'
import SectionTitle from '../section-title/SectionTitle'
import Languages from './Languages'
import Tools from './Tools'

function Skills() {
  return (
    <section className='skills section' id='skills'>
      <SectionTitle
        title = 'Skills'
        subtitle = 'My Technical level'
      />
      <div className="skills_container container grid">
        <Languages/>
        <Frameworks/>
        <Tools/>
      </div>
    </section>
  )
}

export default Skills

import React from 'react'
import './portfolio.css'
import SectionTitle from '../section-title/SectionTitle'
import ProjectCard from './ProjectCard'

function Portfolio() {
  return (
    <div className='portfolio section' id='portfolio'>
      <SectionTitle
        title = 'My Portfolio'
        subtitle = 'Recent Works'
      />
      <div className="portfolio_container container">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </div>
  )
}

export default Portfolio

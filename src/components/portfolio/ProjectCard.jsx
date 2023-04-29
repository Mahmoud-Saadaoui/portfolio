import React from 'react'
import img from "../../assets/project-images/animated-navigation.JPG"

function ProjectCard() {
  return (
    <div className="project_card">
        <img src={img} alt=''/>
        <div className="caption">
    	    <h3>title</h3>
    	    <h5>Show More</h5>
	  </div>
	</div>
  )
}

export default ProjectCard

import React from 'react'

function ProjectCard({id ,title, img, showModal}) {
  
  return (
    <>
      <div className="project_card">
        <img src={img} alt=''/>
        <div className="caption">
          <h3>{title}</h3>
          <h5 onClick={()=>showModal(id)}>Show More</h5>
        </div>
      </div>
      
    </>
  )
}

export default ProjectCard

import React from 'react'

function QualificationTabs({toggleState, toggleTab}) {
  return (
    <div className="qualification_tabs">
        <div 
            className={toggleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"}
            onClick={()=>toggleTab(1)}
        >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
        </div>

        <div 
            className={toggleState === 2 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"}
            onClick={()=>toggleTab(2)}
        >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
        </div>
    </div>
  )
}

export default QualificationTabs

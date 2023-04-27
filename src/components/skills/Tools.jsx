import React from 'react'

function Tools() {
  return (
    <div className='skills_content'>
        <h3 className="skills_title">Frameworks</h3>

        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                    <i className='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills_name">Jest unit testing</h3>
                        <span className="skills_level">Beginner</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i className='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills_name">Redux toolkit</h3>
                        <span className="skills_level">Beginner</span>
                    </div>
                </div>

                <div className="skills_data">
                    <i className='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills_name">Git </h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Tools

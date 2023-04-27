import React, {useState} from 'react'
import './qualification.css'
import SectionTitle from '../section-title/SectionTitle'
import QualificationTabs from './QualificationTabs'

function Qualification() {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
    <section className='qualification section' id='qualification'>
      <SectionTitle
        title = 'Qualification'
        subtitle = 'My Personel Journey'
      />

      <div className="qualification_container container">
        
        <QualificationTabs
            toggleTab = {toggleTab}
            toggleState = {toggleState}
        />

        <div className="qualification_sections">
            <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content "}>
                <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Master in physics chemistry</h3>
                        <span className="qualification_subtitle">
                            Military Academy
                        </span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i>
                            2014
                        </div>
                    </div>

                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div>

                <div className="qualification_data">
                    <div></div>

                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className="qualification_title">Web Developpement</h3>
                        <span className="qualification_subtitle">
                            Online Studiying
                        </span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i>
                            2021 - present
                        </div>
                    </div>

                </div>
            </div>
            <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content "}>
            <div className="qualification_data">
                    <div>
                        <h3 className="qualification_title">Commanding Officer</h3>
                        <span className="qualification_subtitle">
                            Ministry of Defense
                        </span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i>
                            2019 - 2022
                        </div>
                    </div>

                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>
                </div>

                <div className="qualification_data">
                    <div></div>

                    <div>
                        <span className="qualification_rounder"></span>
                        <span className="qualification_line"></span>
                    </div>

                    <div>
                        <h3 className="qualification_title">Security Official</h3>
                        <span className="qualification_subtitle">
                            Ministry of Defense
                        </span>
                        <div className="qualification_calender">
                            <i className="uil uil-calender-alt"></i>
                            2022 - present
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification

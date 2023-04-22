import React, { useState } from 'react'
import './services.css'
import SectionTitle from '../section-title/SectionTitle'

function Services() {
    const [toggleState, setToggleState] = useState(0)
    const toggleTab = (index) => {
        setToggleState(index)
    }
  return (
    <section className='services section' id='services'>
      <SectionTitle
        title = 'Services'
        subtitle = 'What i offer'
      />

      <div className="services_container container grid" id="services">
        <div className="service_content">
            <div>
                <i className="uil uil-web-grid services_icon"></i>
                <h3 className="services_title">Product <br/> Designer</h3>
            </div>

            <span className="services_button" onClick={()=>toggleTab(1)}>
                View More <i className="uil uil-arrow-right services_button-icon"></i>
            </span>

            <div className={toggleState === 1 ? 'services_modal active-modal' : 'services_modal'}>
                <div className="services_modal-content">
                    <i className="uil uil-times services_modal-close" onClick={()=>toggleTab(0)}></i>
                    <h3 className="services_modal-title">Product designer</h3>
                    <p className="services_modal-description">
                    Service with more than 3 years of experience.Providing quality work to clients and companies.
                    </p>
                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            I develop the user interface.
                            </p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            Web page development.
                            </p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            I position your company brand.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        <div className="service_content">
            <div>
                <i className="uil uil-edit services_icon"></i>
                <h3 className="services_title">Visual <br/> Designer</h3>
            </div>

            <span className="services_button" onClick={()=>toggleTab(2)}>
                View More <i className="uil uil-arrow-right services_button-icon"></i>
            </span>

            <div className={toggleState === 2 ? 'services_modal active-modal' : 'services_modal'}>
                <div className="services_modal-content">
                    <i className="uil uil-times services_modal-close" onClick={()=>toggleTab(0)}></i>
                    <h3 className="services_modal-title">Visual Designer</h3>
                    <p className="services_modal-description">
                    Service with more than 3 years of experience.Providing quality work to clients and companies.
                    </p>
                    <ul className="services_modal-services grid">
                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            I develop the user interface.
                            </p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            Web page development.
                            </p>
                        </li>

                        <li className="services_modal-service">
                            <i className="uil uil-check-circle services_modal-icon"></i>
                            <p className="services_modal-info">
                            I position your company brand.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
      </div>
      
    </section>
  )
}

export default Services

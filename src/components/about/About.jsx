import React from 'react'
import './about.css'
import aboutImg from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import Info from './Info'

function About() {
  return (
    <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <div className="about_container container grid">
            <img src={aboutImg} alt="about-img" className="about_img" />
            <div className="about_data">
              <Info />
              <p className="about_description">
                Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.
              </p>
              <a download="CV" href={CV} className="button button--flex">
                Download CV
              </a>
            </div>
        </div>
    </section>
  )
}

export default About

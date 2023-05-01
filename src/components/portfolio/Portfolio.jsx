import React, { useRef, useState } from "react";
import "./portfolio.css";
import SectionTitle from "../section-title/SectionTitle";
import ProjectCard from "./ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { projects } from "./projects";
import { settings } from "./projects";
import ProjectModal from './ProjectModal'


function Portfolio() { 
  
  const arrowRef = useRef(null)
  const [modal, setModal] = useState(false)
  const [modalIndex, setModalIndex] = useState(null)
  const showModal = (id) => {
    setModal(true)
    setModalIndex(id)
  }
  
  return (
    <div className="portfolio section" id="portfolio">
      <SectionTitle title="My Portfolio" subtitle="Recent Works" />
      <div className="portfolio_container container">
        <Slider ref={arrowRef} {...settings}>
          {
            projects.map(proj => (
              <ProjectCard
                id = {proj.id}
                key = {proj.id}
                title = {proj.title}
                img = {proj.image}
                description = {proj.description}
                demo = {proj.demo}
                repo = {proj.repo}
                modalIndex = {modalIndex}
                setModal = {setModal}
                showModal = {showModal}
              />
            ))
          }
        </Slider>
        <div className="btns">
          <button onClick={()=> arrowRef.current.slickPrev()} className="button btn">previous</button>
          <button onClick={()=> arrowRef.current.slickNext()} className="button btn">next</button>
        </div>
      </div>
      {
        projects.map(project => (
            modalIndex === project.id && modal && <ProjectModal
            key = {project.id}
            title = {project.title}
            description = {project.description}
            demo = {project.demo}
            repo = {project.repo}
            setModal = {setModal}
          />
        ))
      }
    </div>
  );
}

export default Portfolio;

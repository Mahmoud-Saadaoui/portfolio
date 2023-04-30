import React, { useRef } from "react";
import "./portfolio.css";
import SectionTitle from "../section-title/SectionTitle";
import ProjectCard from "./ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Portfolio() { 
  
  const arrowRef = useRef(null)
  
  const settings = {
    // className: "center",
    // centerMode: true,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="portfolio section" id="portfolio">
      <SectionTitle title="My Portfolio" subtitle="Recent Works" />
      <div className="portfolio_container container">
        <Slider ref={arrowRef} {...settings}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Slider>
        <div className="btns">
          <button onClick={()=> arrowRef.current.slickPrev()} className="button btn">next</button>
          <button onClick={()=> arrowRef.current.slickNext()} className="button btn">previous</button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

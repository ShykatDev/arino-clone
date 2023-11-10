import React from "react";
import Slider from "react-slick";
import { p1, p2, p3, p4 } from "../../assets";
import { AiOutlineLine } from "react-icons/ai";

const Projects = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    draggable: false,
  };
  return (
    <section id="home-project">
      <div className="title">
        <p>Latest Projects</p>
        <h1>Portfolio to explore</h1>
      </div>
      <div className="slider-projects">
        <Slider {...settings}>
          <div className="project">
            <img src={p1} alt="" />
            <div className="circle">
              <h2>Colorful Art Work</h2>
              <div>
                <p>See details </p>
                <span>
                  <AiOutlineLine />
                </span>
              </div>
            </div>
          </div>
          <div className="project">
            <img src={p2} alt="" />
            <div className="circle">
              <h2>Web Development</h2>
              <div>
                <p>See details </p>
                <span>
                  <AiOutlineLine />
                </span>
              </div>
            </div>
          </div>
          <div className="project">
            <img src={p4} alt="" />
            <div className="circle">
              <h2>Graffiti wall artwork</h2>
              <div>
                <p>See details </p>
                <span>
                  <AiOutlineLine />
                </span>
              </div>
            </div>
          </div>
          <div className="project">
            <img src={p3} alt="" />
            <div className="circle">
              <h2>Corporate Marketing Agency</h2>
              <div>
                <p>See details </p>
                <span>
                  <AiOutlineLine />
                </span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Projects;

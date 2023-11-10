import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Service = () => {
  return (
    <section id="home-service">
      <div className="highlight-sec">
        <div className="left-col">
          <h1>Our fun fact</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis.
          </p>
        </div>
        <div className="right-col">
          <div className="item">
            <h1>40K</h1>
            <div>
              <p>+</p>
              <p>Global Happy Clients</p>
            </div>
          </div>
          <div className="item">
            <h1>50K</h1>
            <div>
              <p>+</p>
              <p>Project Completed</p>
            </div>
          </div>
          <div className="item">
            <h1>245</h1>
            <div>
              <p>+</p>
              <p>Team Members</p>
            </div>
          </div>
          <div className="item">
            <h1>550</h1>
            <div>
              <p>+</p>
              <p>Digital products</p>
            </div>
          </div>
        </div>
      </div>

      <div className="what-we-can-do">
        <div className="left-col">
          <p>What Can We Do</p>
          <h1>Services we can help you with</h1>
          <button className="special-btn">
            See All Services <BsArrowRight />
          </button>
        </div>

        <div className="right-col">
          <div className="card-item"></div>
          <div className="card-item digital">
            <div className="dot"></div>
            <h2>Digital Marketing</h2>
          </div>
          <div className="card-item"></div>
          <div className="card-item ui">
            <div className="dot"></div>
            <h2>UI/UX design</h2>
          </div>
          <div className="card-item tech">
            <div className="dot"></div>
            <h2>Technology</h2>
          </div>
          <div className="card-item"></div>
          <div className="card-item react">
            <div className="dot"></div>
            <h2>React.js Development</h2>
          </div>
          <div className="card-item"></div>
        </div>
      </div>
    </section>
  );
};

export default Service;

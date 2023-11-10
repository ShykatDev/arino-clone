import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { homebg } from "../../assets";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <img src={homebg} alt="" className="header-bg" />
        <div className="rec1 rec"></div>
        <div className="rec2 rec"></div>
        <div className="rec3 rec"></div>

        <h1 className="bigText">Creativity In Our Blood Line</h1>

        <div className="subTitle">
          <button className="special-btn">
            Get a Quote <BsArrowRight className="arrowRight" />
          </button>

          <p>
            We deliver best problem solving solution for our client and provide
            finest finishing product in present and upcoming future.
          </p>
        </div>

        <div className="scroll-io">
          <div className="outer">
            <div className="inner"></div>
          </div>
        </div>

        <div className="social-links">
          <p>Follow Us</p>
          <p>-</p>
          <Link to="/">Facebook</Link>
          <p>|</p>
          <Link to="/">Twitter</Link>
          <p>|</p>
          <Link to="/">Instagram</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  BsTelephonePlusFill,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
  BsSlack,
} from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [navClr, setNavClr] = useState(false);

  const navigate = useNavigate();

  const changeNavColor = () => {
    if (window.scrollY >= 80) {
      setNavClr(true);
    } else {
      setNavClr(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);

  return (
    <nav className={navClr && "navActive"}>
      <div className="desktop-nav">
        <div
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <h1>
            <span>A</span>rino
          </h1>
        </div>
        <ul className="menu">
          <li>
            <Link to="/" className="menuHeading homeHeading">
              Home <FiChevronDown />
            </Link>
            <ul className="homeDrop dropMenu">
              <Link to="/">Default</Link>
              <Link to="/">Photography Agency</Link>
              <Link to="/">Creative Portfolio</Link>
              <Link to="/">Digital Agency</Link>
              <Link to="/">Marketing Agency</Link>
            </ul>
          </li>
          <li>
            <Link to="/" className="menuHeading">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="menuHeading">
              Services <FiChevronDown />
            </Link>
            <ul className="serviceDrop dropMenu">
              <Link to="/">Our Services</Link>
              <Link to="/">Service Details</Link>
            </ul>
          </li>
          <li>
            <Link to="/" className="menuHeading">
              Portfolio <FiChevronDown />
            </Link>
            <ul className="portfolioDrop dropMenu">
              <Link to="/">Our Portfolio</Link>
              <Link to="/">Portfolio Details</Link>
            </ul>
          </li>
          <li>
            <Link to="/" className="menuHeading">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/" className="menuHeading">
              Pages <FiChevronDown />
            </Link>
            <ul className="pagesDrop dropMenu">
              <Link to="/">Our Team</Link>
              <Link to="/">Contact</Link>
              <Link to="/">FAQ</Link>
              <Link to="/">Case Study Details</Link>
            </ul>
          </li>
        </ul>
        <div className="sidebar-open" onClick={() => setSidebar(true)}>
          <HiMenuAlt3 className="sidebar-btn" />
        </div>

        <div className={sidebar ? "sideBar hide" : "sideBar"}>
          <div className="sidebar-content">
            <AiOutlineCloseCircle
              className="close-sideBar"
              onClick={() => setSidebar(false)}
            />

            <div className="title">
              <h1>
                <span>A</span>rino
              </h1>
              <h2>Do you have a project in your mind? Keep connect us.</h2>
            </div>
            <div className="contant-info">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <BsTelephonePlusFill className="io" />
                  <p>+44 454 7800 112</p>
                </li>
                <li>
                  <MdMail className="io" />
                  <p>infotech@arino.com</p>
                </li>
                <li>
                  <FaLocationDot className="io" />
                  <p>50 Wall Street Suite, 44150 Ohio, United States</p>
                </li>
              </ul>
            </div>
            <div className="subscription">
              <h3>Subscribe</h3>
              <div className="form-el">
                <input type="text" placeholder="example@gmail.com" />
                <button>
                  <p>Send</p>
                </button>
              </div>

              <p>
                At vero eos et accusamus et iusto odio as part dignissimos
                ducimus qui blandit.
              </p>
            </div>

            <div className="social-sites">
              <div className="social-io-border">
                <BsFacebook className="social-io" />
              </div>

              <div className="social-io-border">
                <BsLinkedin className="social-io" />
              </div>
              <div className="social-io-border">
                <BsTwitter className="social-io" />
              </div>
              <div className="social-io-border">
                <BsYoutube className="social-io" />
              </div>
              <div className="social-io-border">
                <BsSlack className="social-io" />
              </div>
            </div>

            <div className="darkCircle"></div>
          </div>
        </div>
      </div>
      <div className="mobile-nav"></div>
    </nav>
  );
};

export default Navbar;

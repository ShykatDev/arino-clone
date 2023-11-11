import React from "react";
import {
  BsTelephonePlusFill,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
  BsSlack,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="top-part">
        <div className="col-1">
          <h1>
            <span>A</span>rino
          </h1>
          <p>
            Welcome to arino sed ut perspiciae omunde omnis iste natus error
            sitort voluptatem accusantium.
          </p>

          <div className="social-links">
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
        </div>
        <div className="col-2">
          <p className="title">Services</p>
          <ul>
            <li>Digital Marketing</li>
            <li>UI/UX design</li>
            <li>Technology</li>
            <li>ReactJS Development</li>
          </ul>
        </div>
        <div className="col-3">
          <p className="title">Contact Us</p>
          <ul>
            <li>+44 454 7800 112</li>
            <li>infotech@arino.com</li>
            <li>50 Wall Street Suite, 44150 Ohio, United States</li>
          </ul>
        </div>
        <div className="col-4">
          <p className="title">Subscribe</p>
          <div className="form-el">
            <input type="text" placeholder="example@gmail.com" />
            <button>
              <p>Send</p>
            </button>
          </div>

          <p>
            At vero eos et accusamus et iusto odio as part dignissimos ducimus
            qui blandit.
          </p>
        </div>
      </div>
      <div className="bottom-part">
        <p>Copyright © 2023 Laralink.</p>
        <div>
          <p className="link">Terms of Use</p>
          <p className="line">|</p>
          <p className="link">Privacy policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

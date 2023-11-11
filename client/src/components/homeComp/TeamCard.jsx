import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const TeamCard = ({ banner, name, deg }) => {
  return (
    <div className="team-card">
      <img src={banner} alt="" />
      <div className="details">
        <h2>{name}</h2>
        <p>{deg}</p>
      </div>

      <div className="social-links">
        <FaFacebookF className="s-io" />
        <FaInstagram className="s-io" />
        <FaTwitter className="s-io" />
        <FaLinkedinIn className="s-io" />
      </div>
    </div>
  );
};

export default TeamCard;

import React from "react";
import TeamCard from "./TeamCard";
import Slider from "react-slick";
import { card1, card2, card3, card4 } from "../../assets";

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <section id="home-team">
      <div className="title">
        <p>Our Team</p>
        <h1>Awesome team members</h1>
      </div>

      <Slider {...settings} className="team-cards">
        <TeamCard banner={card1} name="Jerma Ander" deg="Product Designer" />

        <TeamCard banner={card2} name="William Mahar" deg="WP Developer" />

        <TeamCard banner={card3} name="Melon Bulgery" deg="Product Designer" />

        <TeamCard banner={card4} name="Melina Opole" deg="Marketing Head" />

        <TeamCard banner={card3} name="Judy Wilkerson" deg="Product Designer" />
      </Slider>
    </section>
  );
};

export default Team;

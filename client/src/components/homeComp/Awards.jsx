import React from "react";
import Slider from "react-slick";
import AwardItems from "./AwardItems";

const Awards = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section id="home-awards">
      <div className="big-rec"></div>
      <div className="left-col">
        <p>Our Awards</p>
        <h1>We get multiple awards</h1>
      </div>
      <div className="right-col">
        <Slider {...settings}>
          <AwardItems />
          <AwardItems />
        </Slider>
      </div>
    </section>
  );
};

export default Awards;

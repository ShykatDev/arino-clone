import React, { useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const Videopopup = () => {
  const [play, setPlay] = useState(false);

  return (
    <section id="home-videopopup">
      <h1 className="title">
        Our agile process is ability to adapt and respond to change. Agile
        organizations view change as an opportunity, not a threat.
      </h1>

      <div className="popup">
        <div className="play-btn">
          <div className="btn-wave" onClick={() => setPlay(true)}>
            <div className="btn-outline">
              <MdPlayArrow className="play" />
            </div>
          </div>
        </div>

        <div
          className={play ? "video show" : "video"}
          onClick={() => setPlay(false)}
        >
          <iframe
            src="https://www.youtube.com/embed/rIfdg_Ot-LI?si=rZ7QzoPAkWtCNB6u"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="close-popup" onClick={() => setPlay(false)}>
            <AiOutlineClose className="close-btn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videopopup;

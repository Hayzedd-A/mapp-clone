import React from "react";
import trackImg from "../assets/images/track.png";

function Features({ imgSrc, body, heading }) {
  return (
    <div className="eachFeature">
      <div className="image">
        <img src={imgSrc} alt="" />
      </div>
      <div className="text">
        <h3 className="heading">{heading}</h3>
        <div className="body">{body}</div>
      </div>
    </div>
  );
}

export default Features;

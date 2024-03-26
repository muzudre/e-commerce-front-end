import React from "react";
import "./Hero.css";
import here_img from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New arrivals only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest collection</div>
        </div>
      </div>
      <div className="hero-right">
        <img src={here_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;

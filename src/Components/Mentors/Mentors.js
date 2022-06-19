import React from "react";
import "./Mentors.css";
// import truetick from "../../Assets/Plan tick.svg";
import truetick from "../../Assets/Tr.svg";
import MentorsImage from "../../Assets/Mentors Image.png";

export default function Mentors() {
  return (
    <div className="mentors-container">
      <div className="mentors-left">
        <div className="mentor-title">
          Our team of trading <br /> mentors is there for you
        </div>
        <p>
          {`Experienced traders by your side. Leverage the 55+ \n  years  of their experience and finally crack the markets.`}
        </p>
        <div className="tick-points">
          <div className="ponints-list">
            <img src={truetick} alt="" />
            <p>Chat 24/7 with our pro mentors</p>
          </div>
          <div className="ponints-list">
            <img src={truetick} alt="" />
            <p>Experienced in the main financial markets</p>
          </div>
          <div className="ponints-list">
            <img src={truetick} alt="" />
            <p>Every question will be answered</p>
          </div>
        </div>
        <button className="mentors-btn">Get Started</button>
      </div>
      <div className="mentors-right">
        <img src={MentorsImage} alt="" />
      </div>
    </div>
  );
}

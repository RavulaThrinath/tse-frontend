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
          {`Our Team of Consultants is there for you to provide \n solution for seamless, profitable and financial growth \n at your finger tips. Leverage on the years of trading \n experience and finally crack the market with ease.`}
        </p>
        <div className="tick-points">
          <div className="ponints-list">
            <img src={truetick} alt="" />
            <p>24/7 customer support</p>
          </div>
          <div className="ponints-list">
            <img src={truetick} alt="" />
            <p>Intelligent Market Analysis and round the clock trading</p>
          </div>
          <div className="ponints-list">
            <img src={truetick} alt="" />
            <p>AI License configuration and proxy hosting</p>
          </div>
          <div className="ponints-list">
            <img src={truetick} alt="" />
            <p>Risk Analysis and Portfolio evaluation</p>
          </div>
          <div className="ponints-list">
            <img src={truetick} alt="" />
            <p>Economic reviews and Market updates</p>
          </div>
          <div className="ponints-list">
            <img src={truetick} alt="" />
            <p>Other consultancy services</p>
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

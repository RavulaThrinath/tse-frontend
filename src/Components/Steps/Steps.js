import React from "react";
import "./Steps.css";
import { stepsList } from "../../Data";
import arrow1 from "../../Assets/arrow1.svg";
import arrow2 from "../../Assets/arrow2.svg";
import arrow3 from "../../Assets/arrow3.svg";
import arrow4 from "../../Assets/arrow4.svg";

export default function Steps() {
  return (
    <div className="steps-container">
      <div className="steps-heading">Become an Ace trader in 4 steps</div>
      <div className="steps-list">
        {stepsList.map((stepslist) => (
          <div key={stepslist.id} className="steps-box">
            <span className="steps-digit">{stepslist.digit}</span>
            <h2 className="steps-title">{stepslist.title}</h2>
            <p className="steps-desc">{stepslist.description}</p>
          </div>
        ))}
      </div>
      <div>
        <img className="arrow-1 arrow" src={arrow1} alt="" />
        <img className="arrow-2 arrow" src={arrow2} alt="" />
        <img className="arrow-3 arrow" src={arrow3} alt="" />
      </div>
      <div className="comm-container">
        <div>
          <h2 className="main-title">Ready to Grow your Investment?</h2>
          <h2 className="second-title">Trade Intelligently round the clock</h2>
        </div>
        <img src={arrow4} className="arrow-4" alt="" />
        <button className="gs-btn">Book a Schedule</button>
      </div>
    </div>
  );
}

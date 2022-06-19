import React from "react";
import "./Numbers.css";
import { numbersList } from "../../Data";
import numbersTick from "../../Assets/Numbers Tick.svg";

export default function Numbers() {
  return (
    <div className="numbers-container">
      <div className="left-container">
        {numbersList.map((list) => (
          <div key={list.id} className="numbers-list">
            <span className={`num-count ${list.class}`}>{list.count}</span>
            <p>{list.description}</p>
          </div>
        ))}
      </div>
      <div className="right-container">
        <h3>{`Numbers speak \n louder than words`}</h3>
        <p>
          {`Here at Trade Sense expert, we mean business. \n Refer as many people as you can and earn 10% \n recurring commission on all their subscriptions.`}
        </p>
        <ul className="tick-points">
          <li className="ponints-list">
            <img src={numbersTick} alt="" />
            <p>Unlimited design possibility</p>
          </li>
          <li className="ponints-list">
            <img src={numbersTick} alt="" />
            <p>Completely responsive features</p>
          </li>
        </ul>
        <a href="./">Explore Details &#8594;</a>
      </div>
    </div>
  );
}

import React from "react";
import "./ConsultancyServices.css";
import { ConsultancyList } from "../../Data";

export default function ConsultancyServices() {
  return (
    <div className="cs-container">
      <div className="cs-content">
        <h2>TSE Consultancy</h2>
        <p>
          Trade Sense Expert Limited offers clients the opportunity to purchase
          virtual private servers to be used for the hosting of the Expert
          Advisor. The virtual proxy server enables the expert advisor access to
          constant internet and power supply for continuous position engagement.
          Upon the setting up of the expert advisor, clients would be onboarded
          in 3 phases;
        </p>
        <div className="ser-cont">
          {ConsultancyList.map((list, index) => {
            return (
              <div key={index} className="ser-wrapper">
                <div className={list.class}> {list.icon}</div>
                <aside>
                  <h3>{list.title}</h3>
                  <span>{list.description}</span>
                </aside>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./ConsultancyServices.css";
import { ConsultancyList } from "../../Data";

export default function ConsultancyServices() {
  return (
    <>
      <div className="services-heading cs">
        <h1 className="img-heading">Consultancy Services</h1>
      </div>
      <div className="services-content">
        <h1 className="content-title">TSE Consultancy</h1>
        <p className="content-text">
          Trade Sense Expert Limited offers clients the opportunity to purchase
          virtual private servers to be used for the hosting of the Expert
          Advisor. The virtual proxy server enables the expert advisor access to
          constant internet and power supply for continuous position engagement.
          Upon the setting up of the expert advisor, clients would be onboarded
          in 3 phases;
        </p>
        <div className="content-list cs-list">
          {ConsultancyList.map((list, index) => {
            return (
              <div key={index} className="list-wrapper">
                <div className={list.class}> {list.icon}</div>
                <aside>
                  <h3 className="list-title">{list.title}</h3>
                  <span className="list-des">{list.description}</span>
                </aside>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

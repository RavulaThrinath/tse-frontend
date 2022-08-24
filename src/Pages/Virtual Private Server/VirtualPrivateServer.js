import React from "react";
import "./VirtualPrivateServer.css";
import { VpsList } from "../../Data";

export default function VirtualPrivateServer() {
  return (
    <>
      <div className="services-heading vps">
        <h1 className="img-heading">Virtual Private Server</h1>
      </div>
      <div className="services-content">
        <h2 className="content-title">Virtual Private Server</h2>
        <p className="content-text">
          Trade Sense Expert Limited offers clients the opportunity to purchase
          virtual private servers to be used for the hosting of the Expert
          Advisor. The virtual proxy server enables the expert advisor access to
          constant internet and power supply for continuous position engagement.
          Upon the setting up of the expert advisor, clients would be onboarded
          in 2 phases;
        </p>
        <div className="content-list vps-list">
          {VpsList.map((list, index) => {
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

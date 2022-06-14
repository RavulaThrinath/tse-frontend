import React from "react";
import "./VirtualPrivateServer.css";
import { VpsList } from "../../Data";

export default function VirtualPrivateServer() {
  return (
    <div className="vps-container">
      <div className="vps-content">
        <h2>Virtual Private Server</h2>
        <p>
          Trade Sense Expert Limited offers clients the opportunity to purchase
          virtual private servers to be used for the hosting of the Expert
          Advisor. The virtual proxy server enables the expert advisor access to
          constant internet and power supply for continuous position engagement.
          Upon the setting up of the expert advisor, clients would be onboarded
          in 3 phases;
        </p>
        <div className="vps-cont">
          {VpsList.map((list, index) => {
            return (
              <div key={index} className="vps-wrapper">
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

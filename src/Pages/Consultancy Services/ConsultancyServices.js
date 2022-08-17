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
          Trade Sense Expert is the foremost trading consultancy company. Trade
          Sense Expert offers robust consultancy services (as seen on the
          company’s website http://tradesenseexpert.com) .We work with clients
          who seek to maximize trading opportunities, desire to have a
          profitable experience, traders who seek to understand and take
          advantage of trading solutions and want to monetize it. Our
          Consultancy services cuts across helping clients with:
        </p>
        <div className="content-list cs-list">
          {ConsultancyList.map((list, index) => {
            return (
              <div key={index} className="list-wrapper">
                <div className={list.class}> {list.icon}</div>
                <aside>
                  <h3 className="list-title">{list.title}</h3>
                  <p className="list-des1">{list.deslist}</p>
                  <p className="list-des">{list.description}</p>
                </aside>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

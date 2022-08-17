import React from "react";
import "./BusinessStrategy.css";
import { BusinessList } from "../../Data";

export default function BusinessStrategy() {
  return (
    <div>
      <div className="services-heading cs">
        <h1 className="img-heading">TSE Business Strategy Trading Courses</h1>
      </div>
      <div className="services-content">
        <h1 className="content-title">TSE Business Strategy Trading Courses</h1>
        <p className="content-text">
          Trade Sense Expert offers clients an absolute trading solution that
          makes their trading experience seamless and profitable. Traders at
          every point in time need abstracts to aid their trading decisions, we
          have a team of professionals that ensures that traders' requests at
          every point in time are met. We ensure clients have access to trading
          solutions that guarantees a profitable experience with absolute risk
          management being factored in; amongst:
        </p>
        <div className="content-list cs-list">
          {BusinessList.map((list, index) => {
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
    </div>
  );
}

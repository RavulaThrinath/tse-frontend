import React from "react";
import "./BusinessStrategy.css";
import { BusinessList } from "../../Data";

export default function BusinessStrategy() {
  return (
    <div>
      <div className="services-heading cs">
        <h1 className="img-heading">TSE Trading strategy courses</h1>
      </div>
      <div className="services-content">
        <h1 className="content-title">TSE Trading strategy courses</h1>
        <p className="content-text">
          Our strategy courses cover key strategies that work in emerging
          markets. Traders make just as much as they know off the global
          financial market. We equip our clients with the right knowledge of
          identifying various conditions in the financial market and the
          suitable strategies to explore these opportunities with adequate
          knowledge of risk and money management. Successful trading is always a
          function of quality knowledge of the market. We ensure that our
          clients have access these and many more amongst;
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
        <div className="bs-points">
          <ul className="vison-points">
            <li className="content-text-head">
              Fundamental Analysis
              <ul className="vison-points bs-sub-points">
                <li>Introduction to Fundamental Analysis</li>
                <li>Intermediate Fundamental Analysis</li>
                <li>Advance Fundamental Analysis</li>
              </ul>
            </li>
            <li className="content-text-head">
              Technical Analysis
              <ul className="vison-points bs-sub-points">
                <li>Introduction to fibonacci Trading Strategy</li>
                <li>Golden Ratio</li>
                <li>Fibonacci Retracements</li>
                <li>Fibonacci Expansion</li>
              </ul>
              <ul className="arrow-points-bs">
                <li className="arrow-head-bs">
                  ➔ Moving Average Trading Strategy
                  <ul className="arrow-sub-points-bs">
                    <li>Introduction to Moving Average</li>
                    <li>Types of Moving Average</li>
                    <li>Moving Average Support and Resistance</li>
                    <li>Golden Cross and Death Cross</li>
                    <li>Dochain Strategy</li>
                  </ul>
                </li>
                <li className="arrow-head-bs">
                  ➔ Relative Strength Index RSI
                  <ul className="arrow-sub-points-bs">
                    <li>Introduction to RSI</li>
                    <li>RSI Convergence and Divergence</li>
                    <li>RSI Support and Resistance</li>
                    <li>RSI Hidden Divergence</li>
                  </ul>
                </li>
                <li className="arrow-head-bs">
                  ➔ Money Flow Index MFI
                  <ul className="arrow-sub-points-bs">
                    <li>Introduction to MFI</li>
                  </ul>
                </li>
                <li className="arrow-head-bs">
                  ➔ MFI Convergence and Divergence
                </li>
                <li className="arrow-head-bs">
                  ➔ Combine Technical Setup Strategy
                </li>
              </ul>
            </li>
            <li className="content-text-head">
              Sentimental Analysis
              <ul className="vison-points bs-sub-points">
                <li>Introduction to Sentiment Analysis</li>
                <li>Market Psychology</li>
                <li>Combine Market Sentiment</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Teams from "../../Components/Teams/Teams";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="services-heading about-img">
        <h1 className="img-heading">About TSE</h1>
      </div>
      <div className="services-content">
        <h2 className="content-title">Who we are</h2>
        <p className="content-text who-we-are">
          TSE LTD is a fintech trading consulting firm dedicated to making the
          business of financial trading seamless for individual
          traders/investors regardless of their knowledge and technical
          capacities adopting a financial technology and innovative approach to
          risk mitigation and portfolio management (RMPM) offering traders a
          solution for seamless, profitable and financial growth.
        </p>
        <p className="content-text">
          We believe in working closely with our clients and we’re willing to
          adapt our services to respond to the rising demand for trading
          solutions to traders/investors as financial trading in the global
          market is gaining more populace. We will address any of your trading
          concerns with an innovative, apt and dynamic approach.
        </p>
        <h2 className="content-title vAndm">Vision and Mission</h2>
        <p className="content-text">
          Our mission is to provide absolute trade solutions (ATS) to our
          clients, making them easily accessible and delivered in a simple and
          efficient manner leveraging financial technology;
        </p>
        <ul className="vison-points">
          <li className="content-text">
            To empower individual traders/investors to take control of their
            financial lives, free from typical experience of losses in forex
            trading;
          </li>
          <li className="content-text">
            To be a private market partner of choice by creating a superior 24/7
            customer support system efficient enough to establish consistent
            financial growth both in the short and long term.
          </li>
          <li className="content-text">
            To clearly understand your financial values, goals and concerns and
            help to formulate an action to address and accomplish them;
          </li>
          <li className="content-text">
            To establish a community of successful traders/investors in the
            global financial market.
          </li>
        </ul>
      </div>
      <Teams />
    </>
  );
}

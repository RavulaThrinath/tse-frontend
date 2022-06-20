import React from "react";
import Teams from "../../Components/Teams/Teams";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about-container">
        <div className="
        conatiner-wrapper">
          <h2 className="container-heading">About TSE</h2>
          <p className="container-text">
            TSE LTD is a fintech trading consulting firm dedicated to making the
            business of financial trading seamless for individual
            traders/investors regardless of their knowledge and technical
            capacities adopting a financial technology and innovative approach
            to risk mitigation and portfolio management (RMPM) offering traders
            a solution for seamless, profitable and financial growth.
          </p>
          <p className="container-text">
            We believe in working closely with our clients and we’re willing to
            adapt our services to respond to the rising demand for trading
            solutions to traders/investors as financial trading in the global
            market is gaining more populace. We will address any of your trading
            concerns with an innovative, apt and dynamic approach.
          </p>
        </div>
      </div>
      <Teams />
    </>
  );
}

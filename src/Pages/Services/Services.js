import React from "react";
import "./Services.css"
import ServicesContainer from "../../Components/ServicesContainer/ServicesContainer";
import Numbers from "../../Components/Numbers/Numbers";

export default function Services() {
  return (
    <div>
      <div className="services-container">
        <h1>Services</h1>
        <ServicesContainer />
        <Numbers />
      </div>
    </div>
  );
}

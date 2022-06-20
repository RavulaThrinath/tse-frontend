import React from "react";
import "./ServicesContainer.css";
import { ServicesContent } from "../../Data";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

export default function ServicesContainer() {
  return (
    <div className="services-list">
      {ServicesContent.map((list) => (
        <Tilt
          key={list.id}
          className="services-box"
          tiltReverse={true}
          perspective="1000"
          tiltMaxAngleX="7"
          tiltMaxAngleY="7"
        >
          <div className={`servicelist ${list.class}`}>{list.icon}</div>
          <h3>{list.title}</h3>
          <p>{list.description}</p>
          <Link to={list.url}>Learn more &#8594;</Link>
        </Tilt>
      ))}
    </div>
  );
}

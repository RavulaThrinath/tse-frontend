import React from "react";
import "./Teams.css";
import { teamList } from "../../Data";

export default function Teams() {
  return (
    <div className="teams-container">
      <div className="teams-heading">
        <h1 className="title-main">We are a team of experts</h1>
        <p className="desc-main">Let’s talk about how we can bring your ideas to life together</p>
      </div>
      <div className="teams-mates">
        {teamList.map((list, index) => {
          return (
            <div key={index} className="team-list">
              <img
                src={require(`../../Assets/${list.imageId}.png`)}
                alt=""
                className="team-img"
              />
              <div className="team-details">
                <h1>{list.fisrtname}</h1>
                <p>{list.designation}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import "./Plans.css";
// import { plansList } from "../../Data";
import single from "../../Assets/Single.svg";
import double from "../../Assets/Team.svg";
import triple from "../../Assets/Organization.svg";
import truetick from "../../Assets/Plan tick.svg";
import falsetick from "../../Assets/false.svg";
import {Link} from "react-router-dom"

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="plans-title">
        <h1>What deal suit you perfect</h1>
      </div>
      <div className="plans-list">
        <PricingContainer
          title="For Single pack"
          src={single}
          truetick={truetick}
          falsetick={falsetick}
          list1="Ultimate access to all course"
          list2="Free acess for all kind of exercise"
          list3="Total assessment corrections with"
          list4="Ultimate access to all course"
          list5="Unlimited download of courses"
          price="29.99/mo"
        />
        <button className="rec-btn">Recommended</button>
        <PricingContainer
          title="For Team pack"
          src={double}
          truetick={truetick}
          falsetick={falsetick}
          list1="Ultimate access to all course"
          list2="Free acess for all kind of exercise"
          list3="Total assessment corrections with"
          list4="Ultimate access to all course"
          list5="Unlimited download of courses"
          price="49.99/mo"
        />
        <PricingContainer
          title="For Organization pack"
          src={triple}
          truetick={truetick}
          falsetick={falsetick}
          list1="Ultimate access to all course"
          list2="Free acess for all kind of exercise"
          list3="Total assessment corrections with"
          list4="Ultimate access to all course"
          list5="Unlimited download of courses"
          price="79.99/mo"
        />
      </div>
    </div>
  );
};
export default Plans;

export const PricingContainer = ({
  title,
  src,
  truetick,
  list1,
  list2,
  list3,
  list4,
  falsetick,
  price,
}) => {
  return (
    <div className="plans-sec">
      <div className="plans-content">
        <img src={src} alt="" className="pack-img" />
        <h2>{title}</h2>
        <div className="specification">
          <div className="plan-spes">
            <img src={truetick} alt="" />
            <p>{list1}</p>
          </div>
          <div className="plan-spes">
            <img src={truetick} alt="" />
            <p>{list2}</p>
          </div>
          <div className="plan-spes">
            <img src={truetick} alt="" />
            <p>{list2}</p>
          </div>
          <div className="plan-spes">
            <img src={truetick} alt="" />
            <p>{list3}</p>
          </div>
          <div className="plan-spes">
            <img src={falsetick} alt="" />
            <p>{list4}</p>
          </div>
        </div>
      </div>
      <Link to="./" className="price-sec">
        <div>
          <span>Starting from</span>
          <h2>{price}</h2>
        </div>
        &#8594;
      </Link>
    </div>
  );
};

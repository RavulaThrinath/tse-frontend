import React from "react";
import "./Footer.css";
import { RiInstagramFill } from "react-icons/ri";
import {
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { footerLinks2 } from "../../Data";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h1 className="footer-title">Trade Sense Expert</h1>
          <p className="footer-des">
            {`Dedicated to making the business of financial \n trading seamless for individual traders/investors \n regardless of their knowledge and technical capacities`}
          </p>
          <div className="sm-icons">
            <FaFacebookF />
            <RiInstagramFill />
            <FaTwitter />
            <FaTelegramPlane />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="footer-right">
          <div className="links-container">
            <h1 className="links-title">Information</h1>
            {footerLinks2.map((list, index) => {
              return (
                <Link key={index} to={list.href} alt="" className="links-list">
                  {list.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <h4>© 2022 All Rights Reserved by Trade Sense License Ltd.</h4>
        <ul>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
}

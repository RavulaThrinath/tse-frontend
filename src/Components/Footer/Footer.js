import React from "react";
import "./Footer.css";
import { RiInstagramFill } from "react-icons/ri";
import {
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { footerLinks1, footerLinks2, footerLinks3 } from "../../Data";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h1 className="footer-title">Trade Sense Expert</h1>
          <p className="footer-des">
            {`Dedicated to making the business of \n financial trading seamless for individual \n traders/investors regardless of their \n knowledge and technical capacities`}
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
            <h1 className="links-title">About Us</h1>
            {footerLinks1.map((list, index) => {
              return (
                <a key={index} href="./" alt="" className="links-list">
                  {list.name}
                </a>
              );
            })}
          </div>
          <div className="links-container">
            <h1 className="links-title">Our Information</h1>
            {footerLinks2.map((list, index) => {
              return (
                <a key={index} href="./" alt="" className="links-list">
                  {list.name}
                </a>
              );
            })}
          </div>
          <div className="links-container">
            <h1 className="links-title">Our Policy</h1>
            {footerLinks3.map((list, index) => {
              return (
                <a key={index} href="./" alt="" className="links-list">
                  {list.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <h4>© 2022 HowToTrade.com. All Rights Reserved.</h4>
        <ul>
          <li>TermsPrivacy</li>
          <li>Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </div>
  );
}

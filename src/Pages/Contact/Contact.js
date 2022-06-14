import React from "react";
import "./Contact.css";
import { ImLocation2 } from "react-icons/im";
import {  FaEnvelope } from "react-icons/fa";
import {  BiTimeFive } from "react-icons/bi";

export default function Contact() {
  const iconStyling = {
    color: "#ffffff",
    background: "#2A5298",
    padding: "7px",
    fontSize: "30px",
    borderRadius: "50%",
  };
  return (
    <>
      <div className="contact-container">
        <div className="contact-heading">
        <h1>{`Please don't hesitate \n to send us a message`}</h1>
          <p>{`Consistently create net-profits regardless \n of market condition by intelligent forecasting`}</p>
          <div className="left">
            <div className="icons">
              <FaEnvelope style={iconStyling} />
              <a href="mailto:info@techlabit.com">info@tradesenseexpert.com</a>
            </div>
            <div className="icons">
              <BiTimeFive style={iconStyling} />
              <a href="tel:13616603451">Mon-Fri: 10:00-18:00 </a>
            </div>
            <div className="icons">
              <ImLocation2 style={iconStyling} />
              <a
                href="https://goo.gl/maps/9uxGwF74YU74eth68"
                rel="noreferrer"
                target="_blank"
              >
                {`7218 Wren Cir Texas City, \n Texas(TX), 77591`}
              </a>
            </div>
          </div>
        </div>
        <FormContainer />
      </div>
    </>
  );
}

const FormContainer = () => {
  return (
    <div className="container">
      <div className="content">
        <form>
          <div className="user-details">
            <div className="input-box">
              <span className="details">First name</span>
              <input type="text" placeholder="Enter your first name" required />
            </div>
            <div className="input-box">
              <span className="details">Last name</span>
              <input type="text" placeholder="Enter your last name" required />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input type="text" placeholder="Enter your number" required />
            </div>
            <div className="textarea-box">
              <span className="details">Short brief</span>
              <textarea
                type="text"
                placeholder="Your message here..."
                rows="4"
                cols="50"
                required
              />
            </div>
          </div>
          <button>
            <span className="button_top"> Submit </span>
          </button>
        </form>
      </div>
    </div>
  );
};

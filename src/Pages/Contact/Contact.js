import React from "react";
import "./Contact.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-heading">
          <h1>{`Please don't hesitate \n to send us a message`}</h1>
          <p>{`Consistently create net-profits regardless \n of market condition by intelligent forecasting`}</p>
          <div className="left">
            <div className="icons">
              <FaEnvelope />
              <a href="mailto:info@techlabit.com">info@tradesenseexpert.com</a>
            </div>
            <div className="icons">
              <MdAccessTimeFilled />
              <a href="tel:13616603451">Mon-Fri: 8:00-16:00 (GMT) </a>
            </div>
            <div className="icons">
              <IoLogoWhatsapp />
              <a
                href="https://api.whatsapp.com/send?phone=+44-7404649268&text=Hello!"
                rel="noreferrer"
                target="_blank"
              >
                +44 7404649268
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

import React from "react";
import "./PaymentPage.css";
import PaymentImage from "../../Assets/Payment.svg";
import PaypalLogo from "../../Assets/Paypal logo.svg";
// import { PricingContainer } from "../Plans/Plans";

export const PaymentPage = () => {
  return (
    <div className="payment-container">
      <h1 className="payment-heading">Payment Details</h1>
      <div className="payment-content">
        <div className="payment-img">
          <img src={PaymentImage} alt="" />
        </div>
        <div className="payment-right">
          <div className="radiobtn-container">
            <div className="bill-radio">
              <input type="radio" name="" id="" />
              <label className="billing-left dja">
                <h2>Bill Monthly</h2>
                <p>10$/month</p>
              </label>
            </div>
            <div className="bill-radio ">
              <input type="radio" name="" id="" />
              <label className="billing-left dja">
                <h2>Bill Yearly</h2>
                <p>10$/month</p>
              </label>
            </div>
          </div>
          <div className="cards-wrapper">
            <h1>Payment details</h1>
            <div className="fsc g30 cards-container">
              <div className="fcc g10 new-card">
                <input type="radio" name="" id="" />
                <label>New card</label>
              </div>
              <div className="fcc g10 paypal-card">
                <input type="radio" name="" id="" />
                <label>
                  <img src={PaypalLogo} alt="" />
                </label>
              </div>
            </div>
          </div>
          <div>
            <form>
              <div className="card-details">
                <div className="input-box">
                  <span className="details">Card Number</span>
                  <input
                    type="number"
                    placeholder="1234 1234 1234 1234"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Name on card</span>
                  <input type="text" placeholder="Joe Biden" required />
                </div>
                <div className="row-container">
                  <div className="input-box ">
                    <span className="details">Expiration date</span>
                    <input type="number" placeholder="12/30" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Cvv</span>
                    <input type="number" placeholder="123" required />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="price-container  g10">
            <div className="total-price">
              <p>Subtotal</p>
              <p>$29.99</p>
            </div>
            <div className="total-price">
              <p>Yearly plan discount</p>
              <p>$9.99</p>
            </div>
            <div className="total-price">
              <p>Billed now</p>
              <p>$20.00</p>
            </div>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

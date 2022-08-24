import React, { useState } from "react";
import "./Steps.css";
import { stepsList } from "../../Data";
import arrow1 from "../../Assets/arrow1.svg";
import arrow2 from "../../Assets/arrow2.svg";
import arrow3 from "../../Assets/arrow3.svg";
import arrow4 from "../../Assets/arrow4.svg";
import googleicon from "../../Assets/Google icon.svg";
import appleicon from "../../Assets/Apple icon.svg";
import showPwdImg from "../../Assets/show.svg";
import hidePwdImg from "../../Assets/hide.svg";
import { Link } from "react-router-dom";

export default function Steps() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showEmainLogin, setShowEmainLogin] = useState(false);
  const [showResetPass, setShowResetPass] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [pwd, setPwd] = useState("");

  const signUpClose = () => {
    setShowSignUp(false);
  };
  const signInClose = () => {
    setShowSignIn(false);
  };
  const signInEmailClose = () => {
    setShowEmainLogin(false);
  };
  const resetPassClose = () => {
    setShowResetPass(false);
  };
  const otpClose = () => {
    setShowOtp(false);
  };
  const signInOpen = () => {
    setShowSignUp(false);
    setShowSignIn(true);
  };
  const signInEmailOpen = () => {
    setShowSignIn(false);
    setShowEmainLogin(true);
  };
  const donthavacc = () => {
    setShowEmainLogin(false);
    setShowSignUp(true);
  };
  const forgotPassOpen = () => {
    setShowResetPass(true);
    setShowEmainLogin(false);
  };
  const backSignIn = () => {
    setShowResetPass(false);
    setShowEmainLogin(true);
  };
  const otpOpen = () => {
    setShowResetPass(false);
    setShowOtp(true);
  };
  return (
    <>
      <div className="steps-container">
        <div className="steps-heading">Become an Ace trader in 4 steps</div>
        <div className="steps-list">
          {stepsList.map((stepslist) => (
            <div key={stepslist.id} className="steps-box">
              <span className="steps-digit">{stepslist.digit}</span>
              <h2 className="steps-title">{stepslist.title}</h2>
              <p className="steps-desc">{stepslist.description}</p>
            </div>
          ))}
        </div>
        <div>
          <img className="arrow-1 arrow" src={arrow1} alt="" />
          <img className="arrow-2 arrow" src={arrow2} alt="" />
          <img className="arrow-3 arrow" src={arrow3} alt="" />
        </div>
        <div className="comm-container">
          <div>
            <h2 className="main-title">Ready to Grow your Investment?</h2>
            <h2 className="second-title">
              Trade Intelligently round the clock
            </h2>
          </div>
          <img src={arrow4} className="arrow-4" alt="" />
          <button className="gs-btn" onClick={() => setShowSignUp(true)}>
            Book a Schedule
          </button>
        </div>
      </div>
      {showSignUp && (
        <div className="modal" onClick={signUpClose}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-heading">
                <h1>Sign up</h1>
                <p className="modal-title">
                  Create an account and discover new world.
                </p>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-content">
                <form>
                  <div className="su-user-details">
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="number" placeholder="Phone Number" required />
                    <div className="password-input">
                      <input
                        type={isRevealPwd ? "text" : "password"}
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        placeholder="Password"
                        required
                      />
                      <img
                        src={isRevealPwd ? hidePwdImg : showPwdImg}
                        title={isRevealPwd ? "Hide password" : "Show password"}
                        onClick={() =>
                          setIsRevealPwd((prevState) => !prevState)
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="su-checkbox">
                    <input type="checkbox" />{" "}
                    <label>
                      {" "}
                      I accept the <Link to="/">Terms of Service</Link> and{" "}
                      <Link to="/">Privacy Policy.</Link>
                    </label>
                  </div>
                  <button className="dialog-btn">Create your account</button>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <p>
                Already have an account?{" "}
                <button onClick={signInOpen} className="silent-btn">
                  Sign in
                </button>
              </p>
            </div>
            <span className="modal-close" onClick={signUpClose}>
              &times;
            </span>
          </div>
        </div>
      )}
      {showSignIn && (
        <div className="modal" onClick={signInClose}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-heading">
                <h1>Welcome</h1>
                <p className="modal-title">
                  {`Sign in to your account and \n discover a new world.`}
                </p>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-content">
                <div className="auths">
                  <div className="social-auths">
                    <Link to="/" className="google auth">
                      <img src={googleicon} alt="" />
                      <h4>Continue with Google</h4>
                    </Link>
                    <Link to="/" className="apple auth">
                      <img src={appleicon} alt="" />
                      <h4>Continue with Apple</h4>
                    </Link>
                  </div>
                  <div className="cwg-cont">
                    <p>OR</p>
                    <button className="dialog-btn" onClick={signInEmailOpen}>
                      Continue with Email
                    </button>
                  </div>
                  <div className="terms-text">
                    {`By countinuing, you are agree to our Terms of Service. \n Read our Privacy Policy.`}
                  </div>
                </div>
              </div>
            </div>
            <span className="modal-close" onClick={signInClose}>
              &times;
            </span>
          </div>
        </div>
      )}
      {showEmainLogin && (
        <div className="modal" onClick={signInEmailClose}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-heading">
                <h1>Sign in</h1>
                <p className="modal-title">Sign in with your email</p>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-content">
                <form>
                  <div className="su-user-details">
                    <input type="text" placeholder="Username" required />
                    <div className="password-input">
                      <input
                        type={isRevealPwd ? "text" : "password"}
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        placeholder="Password"
                        required
                      />
                      <img
                        src={isRevealPwd ? hidePwdImg : showPwdImg}
                        title={isRevealPwd ? "Hide password" : "Show password"}
                        onClick={() =>
                          setIsRevealPwd((prevState) => !prevState)
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="su-checkbox">
                    <input type="checkbox" />
                    <label>
                      {" "}
                      I accept the <Link to="/">Terms of Service</Link> and{" "}
                      <Link to="/">Privacy Policy.</Link>
                    </label>
                  </div>
                  <button className="dialog-btn">Login</button>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <div className="footer-content">
                <p>
                  Forgot password?{" "}
                  <button onClick={forgotPassOpen} className="silent-btn">
                    Reset
                  </button>
                </p>
                <p>
                  Don’t have an account?{" "}
                  <button onClick={donthavacc} className="silent-btn">
                    Sign up
                  </button>
                </p>
              </div>
            </div>
            <span className="modal-close" onClick={signInEmailClose}>
              &times;
            </span>
          </div>
        </div>
      )}
      {showResetPass && (
        <div className="modal" onClick={resetPassClose}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-heading">
                <h1>Forgot password?</h1>
                <p className="modal-title">{`Enter the email address associated \n with your account. We will email you a \n 4-digit code to reset your password`}</p>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-content">
                <form>
                  <div className="su-user-details">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <button className="dialog-btn" onClick={otpOpen}>
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <div className="footer-content">
                <p>
                  Back to{" "}
                  <button onClick={backSignIn} className="silent-btn">
                    Sign in
                  </button>
                </p>
              </div>
            </div>
            <span className="modal-close" onClick={resetPassClose}>
              &times;
            </span>
          </div>
        </div>
      )}
      {showOtp && (
        <div className="modal" onClick={otpClose}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-heading">
                <h1> </h1>
                <div className="modal-sub-text">{`Enter the verification code we just \n sent you on your email address`}</div>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-content">
                <div className="otp-content">
                  <form className="otp">
                    <input maxLength="1" />
                    <input maxLength="1" />
                    <input maxLength="1" />
                    <input maxLength="1" />
                  </form>
                  <p className="resend-text">
                    If you didn’t receive a code!{" "}
                    <button className="silent-btn">resend</button>
                  </p>
                  <button className="dialog-btn">Verify</button>
                </div>
              </div>
            </div>
            <span className="modal-close" onClick={otpClose}>
              &times;
            </span>
          </div>
        </div>
      )}
    </>
  );
}

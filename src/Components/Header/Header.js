import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo2 from "../../Assets/Logo2.svg";
import showPwdImg from "../../Assets/show.svg";
import hidePwdImg from "../../Assets/hide.svg";
import { NavLink, Link } from "react-router-dom";
import Modal from "../../Dialogs/Dialog";
import useScrollListener from "./Hook";
import googleicon from "../../Assets/Google icon.svg";
import appleicon from "../../Assets/Apple icon.svg";
import { navbarLinks } from "../../Data";

export default function Header() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showEmailLogin, setShowEmailLogin] = useState(false);
  const [showforgotpassword, setShowforgotpassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // Show / hide password
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  // open signin page in signup page
  const openSignIn = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };
  const openEmailLogin = () => {
    setShowEmailLogin(true);
    setShowSignIn(false);
  };
  const openSignUp = () => {
    setShowSignUp(true);
    setShowEmailLogin(false);
  };
  const resetPassword = () => {
    setShowforgotpassword(true);
    setShowEmailLogin(false);
  };
  const backToSignin = () => {
    openEmailLogin(true);
    setShowforgotpassword(false);
  };
  const otpPage = () => {
    setShowOtp(true);
    setShowforgotpassword(false);
  };

  // update classList of nav on scroll
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  useEffect(() => {
    const _classList = [];

    if (scroll.y > 100 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <>
      <nav className={navClassList.join(" ")}>
        <Link to="./" className="header-logo">
          <img src={Logo2} alt="" />
        </Link>
        <div
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(true);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <div
            className="nav-close"
            onClick={() => {
              setIsNavExpanded(false);
            }}
          >
            <span></span>
            <span></span>
          </div>
          <ul>
            {navbarLinks.map((list, index) => (
              <li key={index}>
                <NavLink
                  className="navlink"
                  activeclassname="active"
                  to={list.url}
                  onClick={() => {
                    setIsNavExpanded(false);
                  }}
                >
                  {list.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="sign-btns">
            <button onClick={() => setShowSignIn(true)} className="sign-in">
              Sign in
            </button>
            <button onClick={() => setShowSignUp(true)} className="sign-up">
              Sign up
            </button>
          </div>
        </div>
      </nav>

      {/* dialog for sign up */}

      <Modal
        isVisible={showSignUp}
        title="Sign up"
        description="Create an account and discover new world."
        content={
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
                  onClick={() => setIsRevealPwd((prevState) => !prevState)}
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
        }
        footer={
          <p>
            Already have an account?{" "}
            <button onClick={openSignIn} className="silent-btn">
              Sign in
            </button>
          </p>
        }
        onClose={() => setShowSignUp(false)}
      />

      {/* dialog for sign in */}

      <Modal
        isVisible={showSignIn}
        title="Welcome"
        description={`Sign in to your account and \n discover a new world.`}
        content={
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
              <button className="dialog-btn" onClick={openEmailLogin}>
                Continue with Email
              </button>
            </div>
            <div className="terms-text">
              {`By countinuing, you are agree to our Terms of Service. \n Read our Privacy Policy.`}
            </div>
          </div>
        }
        onClose={() => setShowSignIn(false)}
      />

      {/* dialog for email sign in */}

      <Modal
        isVisible={showEmailLogin}
        title="Sign in"
        description="Sign in with your email"
        content={
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
                  onClick={() => setIsRevealPwd((prevState) => !prevState)}
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
        }
        footer={
          <div className="footer-content">
            <p>
              Forgot password?{" "}
              <button onClick={resetPassword} className="silent-btn">
                Reset
              </button>
            </p>
            <p>
              Don’t have an account?{" "}
              <button onClick={openSignUp} className="silent-btn">
                Sign up
              </button>
            </p>
          </div>
        }
        onClose={() => setShowEmailLogin(false)}
      />

      {/* modal for forgot password  */}

      <Modal
        isVisible={showforgotpassword}
        title2="Forgot password?"
        description={`Enter the email address associated \n with your account. We will email you a \n 4-digit code to reset your password`}
        content={
          <form>
            <div className="su-user-details">
              <input type="email" placeholder="Enter your email" required />
            </div>

            <button className="dialog-btn" onClick={otpPage}>
              Send
            </button>
          </form>
        }
        footer={
          <div className="footer-content">
            <p>
              Back to{" "}
              <button onClick={backToSignin} className="silent-btn">
                Sign in
              </button>
            </p>
          </div>
        }
        onClose={() => setShowforgotpassword(false)}
      />

      {/* dialog for otp to recover account*/}
      <Modal
        isVisible={showOtp}
        onClose={() => setShowOtp(false)}
        title=""
        heading={`Enter the verification code we just \n sent you on your email address`}
        description=""
        content={
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
        }
      />
    </>
  );
}

// const CustomDropdown = ({ ...props }) => (
//   <Dropdown {...props}>
//     <Dropdown.Item>New File</Dropdown.Item>
//     <Dropdown.Item>New File with Current Profile</Dropdown.Item>
//     <Dropdown.Item>Download As...</Dropdown.Item>
//     <Dropdown.Item>Export PDF</Dropdown.Item>
//     <Dropdown.Item>Export HTML</Dropdown.Item>
//     <Dropdown.Item>Settings</Dropdown.Item>
//     <Dropdown.Item>About</Dropdown.Item>
//   </Dropdown>
// );

// <ul className="dropdown">
//               <li>
//                 <Link to="/BusinessStrategy">Business Strategy</Link>
//               </li>
//               <li>
//                 <Link to="/ConsultancyServices">Consultancy Services</Link>
//               </li>
//               <li>
//                 <Link to="/LicenseConfiguration">License Configuration</Link>
//               </li>
//               <li>
//                 <Link to="/VirtualPrivateServer">Virtual Private Server</Link>
//               </li>
//             </ul>

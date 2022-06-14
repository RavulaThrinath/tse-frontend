import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo2 from "../../Assets/Logo2.png";
import { Link } from "react-router-dom";
// import Signup from "../../Dialogs/Sample/Sample";
import useScrollListener from "./Hook";

export default function Header() {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 100 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);
  return (
    <>
      <nav className={navClassList.join(" ")}>
        <Link to="/">
          <img src={Logo2} alt="" width="70px" />
        </Link>
        <ul className="header-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="main-menu">
            <Link to="/">Services</Link>
            <ul className="dropdown">
              <li>
                <Link to="/BusinessStrategy">Business Strategy</Link>
              </li>
              <li>
                <Link to="/ConsultancyServices">Consultancy Services</Link>
              </li>
              <li>
                <Link to="/LicenseConfiguration">License Configuration</Link>
              </li>
              <li>
                <Link to="/VirtualPrivateServer">Virtual Private Server</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div>
          <button className="sign in">Sign in</button>
          <button className="sign up">Sign up</button>
        </div>
      </nav>

      {/* <Signup /> */}
    </>
  );
}

// export function debounce(func, wait, immediate) {
//   var timeout;
//   return function () {
//     var context = this,
//       args = arguments;
//     var later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

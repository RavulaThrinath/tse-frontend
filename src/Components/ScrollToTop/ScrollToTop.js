import React, { useState } from "react";
import "./ScrollToTop.css";
import topIcon from "../../Assets/Vector.svg";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className="top-container"
      onClick={scrollToTop}
      style={{
        display: visible ? "inline" : "none",
      }}
    >
      <img src={topIcon} className="topImage" alt="" />
    </div>
  );
};

export default ScrollToTop;

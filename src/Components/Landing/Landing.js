import React from "react";
import "./Landing.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { landingContent } from "../../Data";

export default function Landing() {
  const settings = {
    dots: true,
    infinite: true,
    fade: false,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 500,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="sldee">
      {landingContent.map((list, index) => {
        return (
          <div className="slides" key={index}>
            <div>
              <h2>{list.maintext}</h2>
              <p>{list.subtext}</p>
              <div className="landing-btns">
                <button className="primary-btn" >
                  {list.primaryBtn}
                </button>
                
                <button className="secondary-btn">
                  <BsFillPlayCircleFill />
                  <span>{list.secondaryBtn}</span>
                </button>
              </div>
            </div>
            <div>
              <img className="landing-img"
                src={require(`../../Assets/${list.rightImage}.svg`)}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

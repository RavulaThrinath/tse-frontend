import React from "react";
import "./Testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import profilecard from "../../Assets/profile card.png";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { testimonialsContent } from "../../Data";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
}

export default function Testimonials() {
  const settings = {
    dots: false,
    infinite: false,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="testimonial-container">
      <div className="header-main">
        <h1 className="title-main">Testimonials</h1>
        <p className="desc-main">What Our Traders say</p>
      </div>
      <Slider {...settings}>
        {testimonialsContent.map((list, index) => {
          return (
            <div key={index}>
              <div className="details">
                <img src={require(`../../Assets/${list.img}.png`)} alt="" />
                <div>
                  <h3>{list.title}</h3>
                  <p>{list.place}</p>
                </div>
              </div>
              <h3 className="testi-content">{list.text}</h3>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

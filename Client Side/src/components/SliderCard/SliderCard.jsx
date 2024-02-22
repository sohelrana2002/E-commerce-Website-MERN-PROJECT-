import React from "react";
import { NavLink } from "react-router-dom";
import "./sliderCard.css";

const SliderCard = ({sliderImage}) => {
  return (
    <div className="slider__card-container">
      <div className="slider__card-image">
        <img src={sliderImage} alt="" />
      </div>

      <div className="slider__card-content">
        <h2>Limited time only for you</h2>
        <h1>FASHION</h1>
        <h4>Look your best on your best day</h4>
        <NavLink to="/products">
          <button className="btn">Shop Now</button>
        </NavLink>
      </div>
    </div>
  );
};

export default SliderCard;

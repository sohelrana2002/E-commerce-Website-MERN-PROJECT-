import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { HeroSectionData } from "../../data/Data";

import "./heroSection.css";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <Carousel
    showArrows={true}
    infiniteLoop = {true}
    interval = {5000}
    autoPlay = {true}
    stopOnHover = {true}
    emulateTouch = {true}
    swipeable = {false}
    transitionTime = {800}

    >
      {HeroSectionData &&
        HeroSectionData?.map(({ id, img }) => {
          const bacgroundImage = {
            width: "100%",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100vh",
            backgroundRepeat: "noRepeat"
          };

          return (
            <div
              key={id}
              className="heroSection__container"
              style={bacgroundImage}
            >
              
              <div className="container">
                <div className="heroSection__content">
                  <h2>Limited time only for you</h2>
                  <h1>FASHION</h1>
                  <h4>Look your best on your best day</h4>
                  <NavLink to = "/products"><button className="btn">Shop Now</button></NavLink>
                </div>
              </div>
            </div>
          );
        })}
    </Carousel>
  );
};

export default HeroSection;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom"; 
import "./HeroSlider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderImage1 from "../../assets/shopping1.jpg";
import SliderImage2 from "../../assets/shopping2.jpg";
import SliderImage3 from "../../assets/shopping3.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSlider = () => {
  return (
    <>
      <div className="swiper__div">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          // onAutoplayTimeLeft={2000}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={SliderImage1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SliderImage2} />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img src={SliderImage3} />
          </SwiperSlide>
        </Swiper>

        <div className="slider__card-content">
          <h2>Limited time only for you</h2>
          <h1>FASHION</h1>
          <h4>Look your best on your best day</h4>
          <NavLink to="/products">
            <button className="btn">Shop Now</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;

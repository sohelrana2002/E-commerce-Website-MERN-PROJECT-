import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SliderCard from '../SliderCard/SliderCard';
import SliderImage1 from '../../assets/shopping1.jpg'
import SliderImage2 from '../../assets/shopping2.jpg'
import SliderImage3 from '../../assets/shopping3.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSlider = () => {
  return (
    <>
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
        <SwiperSlide><SliderCard sliderImage={SliderImage1} /></SwiperSlide>
        <SwiperSlide><SliderCard sliderImage={SliderImage2} /></SwiperSlide>
        <SwiperSlide><SliderCard sliderImage={SliderImage3} /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default HeroSlider
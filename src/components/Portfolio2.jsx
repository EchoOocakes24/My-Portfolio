import React from "react";
import "./Portfolio2.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Branding from '../assets/branding.jpg';
import Katana from '../assets/katana.jpg';
import House from '../assets/house.png';
import "swiper/css";
import { themeContext } from "../Context";
import { useContext } from "react";

export default function Portfolio2() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio">
      {/* Heading */}
      <span style={{color: darkMode? 'white': ''}}>Secondary Projects</span>
      <span>Portfolio</span>

      {/* Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
            <img src={Branding} alt="web" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Katana} alt="web" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={House} alt="web" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

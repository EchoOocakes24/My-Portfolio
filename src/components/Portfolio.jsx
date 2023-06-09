import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";
import "swiper/css";
import { themeContext } from "../Context";
import { useContext } from "react";

export default function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Portfolio">
      {/* Heading */}
      <span style={{color: darkMode? 'white': ''}}>Primary Projects</span>
      <span>Portfolio</span>

      {/* Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://supremebeats.netlify.app/">
            <img src={Project1} alt="web" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://sneakerheadsplv.wixsite.com/store">
            <img src={Project2} alt="web" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://rebolusyonaryotd.netlify.app/">
            <img src={Project3} alt="web" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://main--magenta-swan-78bda7.netlify.app/">
            <img src={Project4} alt="web" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

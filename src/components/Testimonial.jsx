import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonial.css";
import Feather from "../assets/feather.png";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonial() {

  return (
    <div className="t-wrapper" id="Testimonial">
      <div className="t-heading">
        <span>My Filler Skill or </span>
        <span>Extra Skill is </span>
        <span>writing a poem...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* Slider */}
      <Swiper
      pagination={true} modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="poems">
            <img src={Feather} alt="feather" className="w-16"/>
            <span>
              "They say we write the most beautiful poem when we are inlove, but
              little did they know that the most beautiful poems are written by
              the most broken hearts? May it be crafted by tears we let out at
              night, we compose it when no one could throw a single blink or
              sight, because everybody should only see the beautiful parts of
              every broken hearts but not its painful parts."
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="poems">
            <img src={Feather} alt="feather" className="w-16"/>
            <span>
              "When Big bang theory was proposed. They theorized that the
              universe began from a single primordial atom. The atoms were
              scattered in the cosmos and they are out of nowhere. Who knows?
              Maybe our atoms crossed billion years ago? Maybe it's our destiny
              that we meet in the same place at the right time. Maybe our atoms
              are meant to be even the universe does not exist, but one thing is
              for sure. My atoms will always love your atoms."
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="poems">
            <img src={Feather} alt="feather" className="w-16"/>
            <span>
              "Remember that always keep that infinite colorful stars around you
              so when the world becomes dull, you can gleam that glitters and
              make it shine throughout you."
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

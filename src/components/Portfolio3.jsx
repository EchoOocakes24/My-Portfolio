import React from "react";
import "./Portfolio3.css";
import Game from '../assets/Game.png';
import "swiper/css";
import { themeContext } from "../Context";
import { useContext } from "react";

export default function Portfolio3() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio">
      {/* Heading */}
      <span style={{color: darkMode? 'white': ''}}>Game Project</span>
      <span>Portfolio</span>

      {/* Slider */}
      <div
        className="portfolio-slider"
      >
        <div>
            <a href="https://supremospace.itch.io/rebolusyonaryo-td?fbclid=IwAR03Aopm5O96OZ6ImGNWC0Ab_gJXRzzCsbOJm3P42L11WW6E8pSdOypUOzc">
                <img src={Game} alt="web" />
            </a>
        </div>
      </div>
    </div>
  );
}

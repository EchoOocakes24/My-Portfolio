import React from "react";
import "./Service2.css";
import HeartEmoji from "../assets/heartemoji.png";
import Glasses from "../assets/glasses.png";
import Card from "./Card";
import { themeContext } from "../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import InteractivePdf from '../assets/Interactive_PDF.pdf';

export default function Service2() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = { duration: 1, type: "spring" };

  return (
    <div className="services" id="Services">
      {/* Left Side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Secondary</span>
        <span>Skills</span>
        <span>
          Here are the list of my Secondary Skills that I excel and I can offer to you.
          <br />I can't wait to collaborate and work with you!
        </span>
        <a href={InteractivePdf} download>
          <button className="button s-button">Interactive PDF</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right Side */}
      <div className="cards">
        {/* First Card */}
        <motion.div
          whileInView={{ left: "21rem" }}
          initial={{ left: "16rem" }}
          transition={transition}
          style={{ top: "-2rem", left: "22rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Edit and Modeling"}
            detail={"Adobe Photoshop and Canva"}
          />
        </motion.div>
        {/* Second Card */}
        <motion.div
          whileInView={{ left: "2rem" }}
          initial={{ left: "25rem" }}
          transition={transition}
          style={{ top: "12rem", left: "2rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Game Developer"}
            detail={"C# and Unity"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

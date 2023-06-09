import React from "react";
import "./Works.css";
import Laptop from "../assets/laptop.png";
import JavaScript from "../assets/js.png";
import Reactcon from "../assets/react.png";
import Python from "../assets/python.png";
import Database from "../assets/database.png";
import { themeContext } from "../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import BusinessCard from '../assets/business_card.png';

export default function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      {/* Left Side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Skills</span>
        <span>
          Here are the list of my Skills that I excel and I can offer to you.
          <br />
          I can't wait to collaborate and work with you!
          <br />
          Looking forward to get hired
        </span>
        <a href={BusinessCard} download>
          <button className="button s-button">Business Card</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right Side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={JavaScript} alt="JavaScript" />
          </div>
          <div className="w-secCircle">
            <img src={Reactcon} alt="React" />
          </div>
          <div className="w-secCircle">
            <img src={Laptop} alt="Laptop" />
          </div>
          <div className="w-secCircle">
            <img src={Python} alt="Python" />
          </div>
          <div className="w-secCircle">
            <img src={Database} alt="Database" />
          </div>
        </motion.div>
        {/* Background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

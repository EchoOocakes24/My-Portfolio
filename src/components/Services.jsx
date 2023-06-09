import React from "react";
import "./Services.css";
import HeartEmoji from "../assets/heartemoji.png";
import Glasses from "../assets/glasses.png";
import Humble from "../assets/humble.png";
import Resume from "../assets/Jericho.pdf";
import Card from "./Card";
import { themeContext } from "../Context";
import { useContext } from "react";
import { motion } from 'framer-motion'

export default function Services() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {duration: 1, type: 'spring'}

  return (
    <div className="services" id="Services">
      {/* Left Side */}
      <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>My Primary</span>
        <span>Skills</span>
        <span>
          Here are the list of my Primary Skills that I excel and I can offer to you.
          <br />I can't wait to collaborate and work with you!
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* Right Side */}
      <div className="cards">
        {/* First Card */}
        <motion.div 
        whileInView={{left: '21rem'}}
        initial={{left: '16rem'}}
        transition={transition}

        style={{ top: "-2rem", left: "22rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Canva"}
          />
        </motion.div>
        {/* Second Card */}
        <motion.div 
         whileInView={{left: '2rem'}}
         initial={{left: '25rem'}}
         transition={transition}

        style={{ top: "12rem", left: "2rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Node.js"}
          />
        </motion.div>
        {/* Third Card */}
        <motion.div 
         whileInView={{left: '19rem'}}
         initial={{left: '5rem'}}
         transition={transition}

        style={{ left: "19rem", top: "20rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Html, Css, JavaScript, Figma"}
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

import React from "react";
import "./Intro.css";
import Github from "../assets/github.png";
import LinkenIn from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";
import Vector1 from "../assets/Vector1.png";
import Vector2 from "../assets/Vector2.png";
import Echo from "../assets/echo.png";
import Thumbup from "../assets/thumbup.png";
import Crown from "../assets/crown.png";
import Glassesemoji from "../assets/glassesimoji.png";
import FloatingDiv from "./FloatingDiv";
import { themeContext } from "../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
// eslint-disable-next-line

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Jericho De Guzman</span>
          <span>
            An Information Technology Student specialized in Website designing
            and development, producting the Quality work.
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/EchoOocakes24">
            <img src={Github} alt="Github logo" />
          </a>
          <a href="linkedin.com/in/jericho-de-guzman">
            <img src={LinkenIn} alt="LinkedIn logo" />
          </a>
          <a href="https://www.instagram.com/jecjec.deguzman">
            <img src={Instagram} alt="Instagram logo" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="Vector-1" />
        <img src={Vector2} alt="Vector-2" />
        <img src={Echo} alt="Man" className="w-52" />
        <motion.img
          initial={{ left: "-45%" }}
          whileInView={{ left: "-32%" }}
          transition={transition}
          src={Glassesemoji}
          alt="Glasses emoji"
        />
        <motion.div
          initial={{ top: "-4%", left: "-60%" }}
          whileInView={{ left: "58%" }}
          transition={transition}
          style={{ top: "-8%", left: "52%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "17rem", left: "9rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "16rem", left: "-2rem" }}
          className="floating-div"
        >
          <FloatingDiv image={Thumbup} txt1="Web" txt2="Designer" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;

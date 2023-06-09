import React from "react";
import "./Footer.css";
import Wave from "../assets/wave.png";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

export default function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="wave" style={{ width: "100%" }} />
      <div className="f-content">
        <span>jecjecdeguzman24@gmail.com</span>
        <div className="f-icons">
          <a href="https://instagram.com/jecjec.deguzman?igshid=MzNlNGNkZWQ4Mg==">
            <Insta color="white" size="3rem" />
          </a>
          <a href="https://www.facebook.com/jecjec.deguzman">
            <Facebook color="white" size="3rem" />
          </a>
          <a href="https://github.com/EchoOocakes24">
            <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
}

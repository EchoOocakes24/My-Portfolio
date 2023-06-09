import React from "react";
import logo from "../assets/cho.png";
import "./Navbar.css";
import Toggle from "./Toggle";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <img src={logo} alt="logo" className="w-20" />
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="Services"
              smooth={true}
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to="Experience"
              smooth={true}
            >
              <li>Experience</li>
            </Link>
            <Link
              spy={true}
              to="Portfolio"
              smooth={true}
            >
              <li>Portfolio</li>
            </Link>
            <Link
              spy={true}
              to="Testimonial"
              smooth={true}
            >
              <li>Filler</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contacts</button>
      </div>
    </div>
  );
}

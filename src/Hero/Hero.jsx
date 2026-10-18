import React from "react";
import "./Hero.css";
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";

import image from "../assets/img.png";

const Hero = () => {
  return (
    <div className="hero" id="glowna">
      <div className="hero-stars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
      <div className="left">
        <span>Portfolio</span>
        <h1>Witaj na <span>mojej</span> stronie Internetowej</h1>
        <p>
          To moje portfolio — znajdziesz tutaj projekty,
          technologie, z których korzystam na co dzień, oraz trochę informacji
          o mnie.
        </p>
        <button
          className="main-styled"
          onClick={() => {
              document.getElementById("o-mnie")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
              });
          }}
      >
          Zobacz więcej
      </button>

        <div className="social-media">
          <p>Znajdziesz mnie też na</p>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </li>
            
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </li>

            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </li>
          </ul>
          
        </div>
      </div>

      <div className="right">
        <img src={image} alt="" className="image" />

        <div className="profileCard3d">
          <div className="profileCard">
            <div className="top-section">
              <div className="image-border">
                <img src={image} alt="profileImage" />
              </div>

              <div className="small-card">
                <div className="dot"></div>
                <span>Junior developer</span>
              </div>
            </div>

            <div className="info">
              <h4>Bartłomiej Mazurkiewicz</h4>
              <span>IT Student</span>
            </div>

            <div className="list">
              <span>Design</span>
              <span>|</span>
              <span>Web Dev</span>
              <span>|</span>
              <span>Software</span>
            </div>
          </div>

          <div className="cardLeft"></div>
          <div className="cardBottom"></div>
        </div>

        <div className="text">
          <p>Design</p>
          <p>Web Dev</p>
          <p>Software Dev</p>
          <p>Security</p>
        </div>
      </div>

    </div>
  );
};

export default Hero;
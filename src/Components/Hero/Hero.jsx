import React from 'react'
import "./Hero.css"
import img from "../../assets/img2.png"
import Card from "./Card"
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { FiSend, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    
  return (
    <section id="hero-section">
        <div className="container">
            <div className="left-section">
                <span>Portfolio</span>
                <h1>Witaj na <span>mojej</span> stronie Internetowej</h1>
                <p>
                    To moje portfolio - znajdziesz tutaj moje projekty, technologie, z których korzystam na co dzień, oraz trochę informacji o mnie.
                </p>
                <div className="buttons">
                     <button type="button" className="first" onClick={scrollToProjects}>
                        Zobacz projekty <FiArrowRight className="btn-icon" />
                     </button>
                     <button type="button" className="second" onClick={scrollToContact}>
                        Kontakt <FiSend className="btn-icon" />
                     </button>
                </div>

                <div className="social-media">
                    <p>Znajdziesz mnie też na</p>
                    <ul>
                        <li>
                            <a href="https://facebook.com/xbaruz" target="_blank" rel="noreferrer">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/xbaruz" target="_blank" rel="noreferrer">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/xbaruz" target="_blank" rel="noreferrer">
                                <FaGithub />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="right-section">
                <div className="image">
                    <div className="ring1"></div>
                    <div className="ring2">
                        <img src={img} alt="my image" />
                    </div>
                    <Card/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
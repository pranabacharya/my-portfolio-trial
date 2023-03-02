import React from 'react';
import "./Services.css";
import { Card } from '../Card/Card';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./cv.pdf";
import { themeContext } from '../../Context';
import { useContext } from 'react';

export const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode ? "white" : ""}}>My Awesome</span>
            <span>services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Rerum ipsa repellat maxime esse porro consequatur.</span>
            <a href={Resume} download>
                <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <div style={{left: "14rem"}}>
                <Card
                    emoji={HeartEmoji}
                    heading="Design"
                    detail = "Figma, Sketch, Photoshop, Adobe"/>
            </div>
            <div style={{top: "12rem", left: "-4rem"}}>
                <Card
                    emoji={Glasses}
                    heading="Frontend"
                    detail = "HTML5, CSS3, JavaScript, React" />
            </div>
            <div style={{top: "19rem", left: "12rem"}}>
                <Card
                    emoji={Humble}
                    heading="Backend"
                    detail = "PHP, MySql, Nodejs" />
            </div>
            <div className="blur s-blur" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

import React from 'react';
import "./Intro.css";
import { FloatingDiv } from '../FloatingDiv/FloatingDiv';

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';


function Intro() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="intro" id='Intro'>
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode ? "white" : ""}}>Hi! I Am</span>
                <span>Pranab Acharya</span>
                <span>Frontend Developer with high level of experience in web development, producting the Quality work</span>
            </div>

            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />
            <div style={{top: "-4%", left: "68%"}}>
                <FloatingDiv image={Crown} text1="Web" text2="Developer"/>
            </div>
            <div style={{top: "18rem", left: "2rem"}}>
                <FloatingDiv image={thumbup} text1="Best Design" text2="Award"/>
            </div>
            <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" style={{
                background: "#C1F5FF",
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left: "-9rem"
            }}></div>
        </div>
    </div>
  )
}

export default Intro
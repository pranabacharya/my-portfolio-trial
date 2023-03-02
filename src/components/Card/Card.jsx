import React from 'react';
import "./Card.css";
import { themeContext } from '../../Context';
import { useContext } from 'react';
export const Card = ({emoji, heading, detail}) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="card" >
        <img src={emoji} alt="" />
        <span style={{color: darkMode ? "white": ""}}>{heading}</span>
        <span style={{color: darkMode ? "white": ""}}>{detail}</span>
        <button className="c-button">Learn More</button>
    </div>
  )
}

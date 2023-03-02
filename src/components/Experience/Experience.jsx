import React from 'react';
import "./Experience.css";
import { themeContext } from '../../Context';
import { useContext } from 'react';


export const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" style={darkMode ? { color: "rebeccapurple"}: {color: "yellow"}} id="Experience">
        <div className="achievement">
            <div className="circle" style={darkMode ? {backgroundColor:"white", color: "black"}: {backgroundColor: "", color: ""}}>2+</div>
            <span>Years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle" style={darkMode ? {backgroundColor:"white", color: "black"}: {backgroundColor: "", color: ""}}>10+</div>
            <span>Completed</span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className="circle" style={darkMode ? {backgroundColor:"white", color: "black"}: {backgroundColor: "", color: ""}}>5+</div>
            <span>Used</span>
            <span>Technology</span>
        </div>
    </div>
  )
}

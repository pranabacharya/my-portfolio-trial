import React from 'react';
import "./FloatingDiv.css";
import { themeContext } from '../../Context';
import { useContext } from 'react';

export const FloatingDiv = ({image, text1, text2}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="floatingdiv" >
        <img src={image} alt="" />
        <span style={{color: darkMode ? "black": ""}}>
            {text1}
            <br/>
            {text2}
        </span>
    </div>
  )
}

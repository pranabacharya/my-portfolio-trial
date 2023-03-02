import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
const Navbar = () => {
    return(
        <div className="n-wrapper" id="Navbar">
            <div className="n-left">
                <div className="n-name">Pranab</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: "none"}}>
                        <Link 
                        activeClass="activeClass"
                        to="Navbar"
                        spy={true}
                        smooth={true}
                        >
                            <li>Home</li>
                        </Link>
                        <Link
                            to="Services"
                            spy={true}
                            smooth={true}>
                                <li>Services</li>
                            </Link>
                        <Link
                            to="Experience"
                            spy={true}
                            smooth={true}>
                        <li>Experience</li>
                            </Link>
                        <Link
                            to="Portfolio"
                            spy={true}
                            smooth={true}>
                        <li>Portfolio</li>
                            </Link>
                    </ul>
                </div>
                <Link 
                    to="Contact"
                    smooth={true}
                    spy={true}>
                <button className="button n-button">
                    Contact
                </button>
                    </Link>
            </div>
        </div>
    )
}

export default Navbar;
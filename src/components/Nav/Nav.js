import React from "react";
import "./Nav.css";

const Nav = props => {
    return (

        <div className="topnav" id="myTopnav">
            <a href="#home" className="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a className="icon" onClick={props.showDropDown}>
                <i className="fa fa-bars"></i>
            </a>
        </div>
    )

}

export default Nav
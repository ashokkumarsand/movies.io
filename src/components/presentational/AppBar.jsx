import React from "react";
import "./styles/app-bar.css";
import logo from "../../logo.svg"
const AppBar = (props) => { return <header role="navigation" className="app-header">
    <nav role="logo" className="nav-item"><img src={logo} className="logo" /></nav>
    <nav role="brand" className="nav-item"><span className="brand">Movies.io</span></nav>
</header>;}

export default AppBar;
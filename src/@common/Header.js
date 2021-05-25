import React from 'react';
import Navbar from './Navbar.js';

import logo from "../assets/images/icslogo.jpg";

import '../stylesheets/Header.css';

function Header () {

    return (
        <section className="header">
            <section className="logo">
                <img src={logo} alt="ICS logo" width="110px" height="105px"/>
                <section className="title">
                    <div className="maintitle">ICS Virtual Library</div>
                    <div className="subtitle">University of the Philippines Los Baños</div>
                </section>  
            </section>
            <section className="navbar">
                <Navbar/>
            </section>
        </section>
    )
}

export default Header;
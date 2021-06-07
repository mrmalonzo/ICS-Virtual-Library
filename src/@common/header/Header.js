import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../navbar/Navbar.js';
import logo from "../../assets/images/logos/icslogo.jpg";
import '../../stylesheets/components/Header.css';

function Header () {

    return (
        <section className="header">
            <section className="logo">
                <Link to = "/">
                    <img src={logo} alt="ICS logo" width="110px" height="105px"/> 
                </Link>
                
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
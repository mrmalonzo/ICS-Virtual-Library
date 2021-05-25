import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../assets/images/ics_logo.jpg';

import '../stylesheets/Header.css';


const Header = () => {

    return (

        <div className="Page-header">
            
            <img className="ICS-logo" src={logo} alt="ICS Logo" />

            <div className="Text-container">
                <h1 className="Website-name"> ICS Virtual Library </h1>
                <h3 className="Website-subtext"> University of the Philippines Los Baños </h3>
            </div>

            <div className="Right-elements">
                <h3 className="About"> About </h3>  
                <h3 className="Login"> Login </h3>  
            </div>
               

        </div> 

    );
    
}

export default Header;
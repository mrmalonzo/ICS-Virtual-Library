import React, {Component} from 'react';
import '../../stylesheets/components/Announcements.css';
import { Link } from 'react-router-dom';

import {
    Books,
    People,
    UPLB
} from '../../assets/images';


import { withRouter } from 'react-router';



class Announcements extends Component {

    onClick = () => {
        window.scrollTo(0, 0)
    }

    render () {
        return (

            <div className="Container">
    
                <div className="Announcement">
                    <img className="Announcement-image" src = {Books} alt="Books"/>
                    <h1 className="Image-title">Explore Books</h1>
    
                    <div className="Announcement-button">
                        <Link to="/browse">
                            <h3> Browse </h3>
                        </Link>
                    </div>
                    
                </div>
    
                <div className="Announcement">
                    <img className="Announcement-image" src = {People} alt="People"/> 
    
                    <h1 className="Image-title">Learn More</h1>
                    <h4 className="Image-subtitle">Get to know the students behind this <br/> virtual library. </h4>
    
                    <div className="Announcement-button" onClick={this.onClick}>
                        <Link to="/about">
                            <h3> About </h3>
                        </Link>
                        
                    </div>
                </div>
    
                <div className="Announcement">
                    <img className="Announcement-image" src = {UPLB} alt="UPLB"/>
                    <h1 className="Image-title">Discover ICS</h1>
    
                    <div className="Announcement-button" onClick={this.onClick}>
                        <Link to={{ pathname: "http://ics.uplb.edu.ph/" }} target="_blank" >

                        <h3>Contact</h3>
                        </Link>
                    </div>
                </div>
    
    
            </div>
        )

    }
    

}

export default withRouter(Announcements);
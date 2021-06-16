import React from 'react';
import '../../stylesheets/components/Announcements.css';
import { Link } from 'react-router-dom';

import {
    Books,
    People,
    UPLB
} from '../../assets/images';

const Announcements = () => {

    return (

        <div className="Container">

            <div className="Announcement">
                <img className="Announcement-image" src = {Books} alt="Books"/>
                <h1 className="Image-title">Discover Books</h1>

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

                <div className="Announcement-button">
                    <Link to="/about">
                        <h3> About </h3>
                    </Link>
                    
                </div>
            </div>

            <div className="Announcement">
                <img className="Announcement-image" src = {UPLB} alt="UPLB"/>
                <h1 className="Image-title">Unlock Features</h1>

                <div className="Announcement-button">
                    <h3> Login </h3>
                </div>
            </div>


        </div>
    )

}

export default Announcements;
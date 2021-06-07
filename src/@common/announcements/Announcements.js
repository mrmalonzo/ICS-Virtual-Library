import React from 'react';
import '../../stylesheets/components/Announcements.css';

import {
    Books,
    People,
    UPLB
} from '../../assets/images';

const Announcements = () => {

    return (

        <div className="Container">

            <div className="Announcement-1">
                <img className="Announcement-image" src = {Books} alt="Books"/>
                <h1 className="Image-title">Discover Books</h1>

                <div className="Announcement-button">
                    <h3> Browse </h3>
                </div>
                
            </div>

            <div className="Announcement-2">
                <img className="Announcement-image" src = {People} alt="People"/> 

                <h1 className="Image-title">Learn More</h1>
                <h4 className="Image-subtitle">Lorem isum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod </h4>

                <div className="Announcement-button">
                    <h3> About </h3>
                </div>
            </div>

            <div className="Announcement-3">
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
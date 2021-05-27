import React from 'react';
import '../stylesheets/Announcements.css';

import books from "../assets/images/misc/books.png";
import people from "../assets/images/misc/people-reading.png";
import uplb from "../assets/images/misc/uplb.png";

const Announcements = () => {

    return (

        <div className="Container">

            <div className="Announcement-1">
                <img className="Announcement-image" src = {books} alt="Books"/>
                <h1 className="Image-title">Discover Books</h1>

                <div className="Announcement-button">
                    <h3> Browse </h3>
                </div>
                
            </div>

            <div className="Announcement-2">
                <img className="Announcement-image" src = {people} alt="People"/> 

                <h1 className="Image-title">Learn More</h1>
                <h4 className="Image-subtitle">Lorem isum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod </h4>

                <div className="Announcement-button">
                    <h3> About </h3>
                </div>
            </div>

            <div className="Announcement-3">
                <img className="Announcement-image" src = {uplb} alt="UPLB"/>
                <h1 className="Image-title">Unlock Features</h1>

                <div className="Announcement-button">
                    <h3> Login </h3>
                </div>
            </div>


        </div>
    )

}

export default Announcements;
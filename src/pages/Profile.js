import React, {Component} from 'react';

import Navbar from '../@common/Navbar';
import Footer from '../@common/Footer';
import Button from '../@common/Button.js';
import ProfilePage from '../@common/ProfilePage.js';




export default class Profile extends Component {
    render() {
        return(
            <div>

                <Navbar/>
                <div className="Profile">
                    <Button className="Profile-menu"/>
                    <ProfilePage/>

                </div>
                
                
                <Footer/>


            </div>

            
        );
    }
}
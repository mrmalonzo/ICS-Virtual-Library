import React, {Component} from 'react';

import { Sidebar, Details } from '@common';

import "../stylesheets/pages/ProfilePage.css";

export default class ProfilePage extends Component {
    render() {
        return(   
            <div className="Whole-page">
                <Sidebar className="Profile-menu"/>
                <Details { ... this.props}/>

            </div>
        );
    }
}
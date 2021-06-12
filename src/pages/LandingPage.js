import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { Search, Announcements } from '@common';

export default class LandingPage extends Component {

    showResults = (data) => {
        this.props.passToBrowse(data);
    }


    render() {

        
        return (

            <div>     
                <Search passToBrowse={this.showResults}/>
                <Announcements/>
                
            </div>
 
        );

    }    
}


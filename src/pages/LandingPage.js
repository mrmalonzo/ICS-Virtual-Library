import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { Search, Announcements } from '@common';

export default class LandingPage extends Component {

    showResults = (data) => {
        this.props.display(data);
    }


    render() {

        
        return (

            <div>     
                <Search store={this.showResults}/>
                <Announcements/>
                
            </div>
 
        );

    }    
}


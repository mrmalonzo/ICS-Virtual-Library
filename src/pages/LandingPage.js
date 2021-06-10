import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { Search, Announcements } from '@common';

export default class LandingPage extends Component {

    render() {

        
        return (

            <div>     
                <Search store={results}/>
                <Announcements/>
                
            </div>
 
        );

    }    
}


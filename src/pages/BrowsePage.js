import { render } from '@testing-library/react';
import React, {Component} from 'react';

import { Results, Filter } from '@common';
import '../stylesheets/pages/BrowsePage.css'


class BrowsePage extends Component {


    render() {

        return(
        
            <div className="Search-results">
    
                
                
                <Results data={this.props.data}/>
                
            </div>
        );

    }
    

}

export default BrowsePage;
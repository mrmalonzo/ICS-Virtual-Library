import { render } from '@testing-library/react';
import React, {Component} from 'react';

import { Results, Filter } from '@common';
import '../stylesheets/pages/BrowsePage.css'


class BrowsePage extends Component {
    
    componentDidMount() {
        console.log(this.props.data);
        console.log(this.props.hello);

    }

    render() {

        return(
        
            <div className="Search-results">
    
                <Filter/>
                
                <Results data={this.props.data}/>
                
            </div>
        );

    }
    

}

export default BrowsePage;
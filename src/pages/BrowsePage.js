import React, {Component} from 'react';
import { Results } from '@common';
import '../stylesheets/pages/BrowsePage.css'


class BrowsePage extends Component {

    passToView = (data) => {
        this.props.passToView(data)
    }


    render() {

        return(
        
            <div className="Search-results">
    
                
                
                <Results passToView={this.passToView} data={this.props.data}/>
                
            </div>
        );

    }
    

}

export default BrowsePage;
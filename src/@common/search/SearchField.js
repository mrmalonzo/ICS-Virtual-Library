import React, {Component} from 'react';
import { search } from '../../api';


import hero from '../../assets/images/hero/hero_image_3.png';
import 'antd/dist/antd.css';
import '../../stylesheets/components/Search.css';

import { Input, Space } from 'antd';


const { Search } = Input

export default class SearchField extends Component  {

    onSearch = async (value) => {
        const results = await search(value);

        this.props.store(results)
    }

   
    
    render() {

        return (

            <div className="Search">
    
                <div className="Rectangle">
                    <h1 className="Search-text">Search journals, magazines, theses, <br></br> and special problems in our ICS Library</h1>
    
                    <Search className="Search-bar" placeholder="Search ICS" onSearch={this.onSearch}  style={{ width: 450 }} size="large"/>
                    
    
                    <h2 className="Search-subtext"> Discover ICS-UPLB’s vast collection of <br/> academic literature even away from campus.</h2> 
                    
                </div>
                
                <img className="Hero-image" src={hero} alt ="Hero Image"/>
                
            </div>
    
        );
    }
}
import React from 'react';
import ReactDOM from 'react-dom';

import hero from '../assets/images/hero_image.png';
import 'antd/dist/antd.css';
import '../stylesheets/Search.css';

import { Input, Space } from 'antd';


const Search = () => {
    const { Search } = Input;
    const onSearch = value => console.log(value);

    return (

        

        <div className="Search">

            <div className="Rectangle">
                <h1 className="Search-text">Search journals, magazines, theses, <br></br> and special problems in our ICS Library</h1>

                <Search className="Search-bar" placeholder="Search ICS" onSearch={onSearch} style={{ width: 450 }} size="large"/>
                

                <h2 className="Search-subtext"> Discover ICS-UPLB’s vast collection of <br/> academic literature even away from campus.</h2> 
                
            </div>
            
            <img className="Hero-image" src={hero} alt ="Hero Image"/>
            
        </div>

    );

}

export default Search;
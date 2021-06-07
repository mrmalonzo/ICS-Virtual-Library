import { render } from '@testing-library/react';
import React from 'react';

import { Results, Filter } from '@common';
import '../stylesheets/pages/BrowsePage.css'


const BrowsePage = () => {

    return(
        
        <div className="Search-results">

            <Filter/>
            
            <Results/>
            
        </div>
    );

}

export default BrowsePage;
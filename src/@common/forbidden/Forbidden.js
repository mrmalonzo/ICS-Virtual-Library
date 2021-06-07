import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/components/NotFound.css';


const NotFound = () => {
    return (

    
        <div className="NotFound">
            <h1>403</h1>

            <h2>You are not authorized to access this page.</h2>
            <h3>Please try contacting ICS Virtual Library Support for help</h3>
        
            <h3>
                Go back <Link className ="Home-link" to="/"><u>Home</u></Link>
            </h3>            
            

        </div>
    


    );
}

export default NotFound;
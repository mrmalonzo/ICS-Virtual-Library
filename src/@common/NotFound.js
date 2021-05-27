import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/NotFound.css';




const NotFound = () => {
    return (

    
        <div className="NotFound">
            <h1>404</h1>

            <h2>We can't find the page you're looking for</h2>
            <h3>Please try contacting ICS Virtual Library Support for help</h3>
        
            <h3>
                Go back <Link className ="Home-link" to="/"><u>Home</u></Link>
            </h3>            
            

        </div>
    


    );
}

export default NotFound;
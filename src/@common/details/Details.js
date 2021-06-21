import React, {Component} from "react";
import "../../stylesheets/components/Details.css";
import { Profile } from '../../assets/images';



export default class Details extends Component {

    
    render() {
        return(
            <div className="Profile-container">
    
                <img className="Profile-illustration" src={Profile} alt="Profile-illustration"/> 

                <h2> Welcome, {this.props.first_name}!</h2>
                <h3> 
                    As a student, you are able to access the different books  <br/>
                    and publications in our ICS Virtual Library. If you think this <br/>
                    is a mistake, and you would like to request administrator<br/>
                    capabilities, kindly contact ICS.

                </h3>
                
            </div>
        );
    }
	
}



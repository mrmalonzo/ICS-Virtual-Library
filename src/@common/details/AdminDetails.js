import React, {Component} from "react";
import "../../stylesheets/components/Details.css";

import { Profile } from '../../assets/images';


export default class AdminDetails extends Component {


    state = {   
        user: null
    }

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem("user"))
        this.setState({
            user: data
        });

    }

    render() {
        return(
            <>
                <div className="Profile-container">
                    <img className="Profile-illustration" src={Profile}/> 

                    <h2> Welcome, {this.props.first_name}!</h2>
                    <h3> 
                        As an Administrator, you are able to view a list of all the people  <br/>
                        who logged in, and a summary of all books and publications. <br/>
                        You may also assign users as either administrator or student; <br/>
                        and create, update, and delete books or publications.

                    </h3>
                </div>
                
            
            </>
            
        );
    }
	
}




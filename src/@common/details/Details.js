import React, {Component} from "react";
import "../../stylesheets/components/Details.css";


export default class Details extends Component {

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
            <div className="Profile">
    
                <h2>Student</h2>
                <img className="profile-pic" src={this.state.user.image}/>
                <p className="text">First Name</p>
                
             
            </div>
        );
    }
	
}



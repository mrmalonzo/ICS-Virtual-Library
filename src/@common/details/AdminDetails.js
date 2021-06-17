import React, {Component} from "react";
import "../../stylesheets/components/Details.css";



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
                <div className="Profile">

                    <img className="profile-pic-big" src={this.props.image}/> 

                    <h2> Welcome, {this.props.first_name}</h2>

                </div>
                
            
            </>
            
        );
    }
	
}




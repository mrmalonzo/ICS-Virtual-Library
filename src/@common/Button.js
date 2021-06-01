import React from "react";
import "../stylesheets/Button.css";

const Button = () =>{
	return(
		<div className="buttons">
			 <a className="button-item" id="button-item-top">Profile</a>
            <a className="button-item">Assign Roles</a>
             <a className="button-item">Books</a>
            <a className="button-item" id="button-item-bottom">Summary Reports</a>
		</div>
	);
}


export default Button;
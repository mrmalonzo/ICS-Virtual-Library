import React from "react";
import { Link, Redirect } from 'react-router-dom';
import "../../stylesheets/components/Sidebar.css";

const Sidebar = () =>{
	return(
		<div className="buttons">

			{/* <a className="button-item" id="button-item-top">Profile</a>
			<a className="button-item">Assign Roles</a> */}

			<Link to="/account/profile">
			<a className="button-item" id="button-item-top">Profile</a>
			</Link>

			<Link to="/account/assign">
				<a className="button-item">Assign Roles</a>

			</Link>
            
            <a className="button-item">Books</a>
            <a className="button-item" id="button-item-bottom">Summary Reports</a>
		</div>
	);
}


export default Sidebar;
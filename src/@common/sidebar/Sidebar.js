import React from "react";
import { Link } from 'react-router-dom';
import "../../stylesheets/components/Sidebar.css";

const Sidebar = () =>{
	return(
		<div className="buttons">

			{/* <a className="button-item" id="button-item-top">Profile</a>
			<a className="button-item">Assign Roles</a> */}

			<Link to="/account/profile">
			<a className="button-item" id="button-item-top">Profile</a>
			</Link>

		</div>
	);
}


export default Sidebar;
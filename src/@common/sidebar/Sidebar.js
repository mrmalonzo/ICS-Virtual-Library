import React from "react";
import { Link } from 'react-router-dom';
import "../../stylesheets/components/Sidebar.css";

const Sidebar = () =>{
	return(
		<div className="buttons">

			{/* <a className="button-item" id="button-item-top">Profile</a>
			<a className="button-item">Assign Roles</a> */}

			<Link to="/account/profile">
				<h4 className="button-item" id="button-item-top">Profile</h4>
			</Link>

		</div>
	);
}


export default Sidebar;
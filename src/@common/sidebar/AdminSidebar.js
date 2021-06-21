import React from "react";
import { Link } from 'react-router-dom';
import "../../stylesheets/components/Sidebar.css";

const AdminSidebar = () =>{
	return(
		<div className="buttons">

			{/* <a className="button-item" id="button-item-top">Profile</a>
			<a className="button-item">Assign Roles</a> */}

			<Link className="button-item" id="button-item-top" to="/account/profile">
				<h4 href="/account/profile" className="button-item-a">Profile</h4>
			</Link>

			<Link className="button-item" to="/account/assign">
				<h4 className="button-item-a">Assign Roles</h4>

			</Link>
            
			<Link className="button-item" to="/account/books">
            	<h4 className="button-item-a">Books</h4>
			</Link>

			<Link className="button-item" to="/account/publications">
            	<h4 className="button-item-a">Publications</h4>
			</Link>

			<Link className="button-item" to="/account/activity-log">
				<h4 className="button-item-a">Activity Log</h4>
			</Link>
			
			<Link className="button-item" to="/account/summary-reports">
				<h4 className="button-item-a" id="button-item-bottom">Summary Reports</h4>
			</Link>
            
		</div>
	);
}


export default AdminSidebar;
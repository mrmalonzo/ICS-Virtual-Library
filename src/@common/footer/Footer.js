import React from "react";
import "../../stylesheets/components/Footer.css";

import firefox from "../../assets/icons/firefox.png";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";

const Footer = () =>{
	return(
		<div className="footer">
			<div className="group1">
				<h2>Contact ICS</h2>
				<div className="details">
					<h3>Institute of Computer Science{"\n"}
						College of Arts and Sciences{"\n"}
						University of the Philippines Los Baños{"\n"} 
						College 4031, Laguna, Philippines
					</h3>
					<h3>Phone +63-49-536-2313{"\n"}
						Fascimilie +63-49-536-2302
					</h3>
				</div>
			</div>

			<div className="group2">
				<h3 className="ics-details">
				The Institute of Computer Science (ICS) is an autonomous institute of the College of Arts and Sciences (CAS) of the University of the Philippines 
				Los Baños (UPLB). ICS is Commission on Higher Education's (CHED) Center of Excellence in Information Technology Education. 
				</h3>
				
				<div className="final">

					<h3>
					©2021 ICS Virtual Library, All Rights Reserved.
					</h3>
					<div className="links">
						<a href="www.google.com" target="_blank" rel="noopener noreferrer"><img src={firefox} alt="Firefox" className="imagesLinks"/></a>
						<a href="www.twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Firefox" className="imagesLinks"/></a>
						<a href="www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Firefox" className="imagesLinks"/></a>
					</div>

				</div>
			</div>
		</div>
	);
}


export default Footer;
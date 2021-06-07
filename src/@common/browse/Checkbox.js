import React from "react";
import '../../stylesheets/components/Checkbox.css'

const Checkbox = ({label, name , checkedMethod , passkey}) =>{
	if(label === "ui"){ //to be printed beautifully
		label = "UI/UX Design";
	}else if(label === "imgprocess"){
		label = "Image Processing";
	}else if(label === "parallel"){
		label = "Parallel Programming";
	}


	return(
        <div className="checkbox">
            <input type="checkbox"
                name = {name}
                onChange = {checkedMethod}
                key = {passkey}
	  		/>
	  		<label className="label">{(label === "specialproblems" ? "Special Problems" : label)}</label>
        </div>
    );
}


export default Checkbox;
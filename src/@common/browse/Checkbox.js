import React from "react";
import '../../stylesheets/components/Checkbox.css'

const Checkbox = ({label, name, checkedMethod, passkey}) =>{


	return(
        <div className="checkbox">
            <input type="checkbox"
                name = {name}
                onChange = {checkedMethod}
                key = {passkey}
	  		/>
	  		<label className="label">{label}</label>
        </div>
    );
}


export default Checkbox;
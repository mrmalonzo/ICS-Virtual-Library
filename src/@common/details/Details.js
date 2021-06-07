import React from "react";
import "../../stylesheets/components/Details.css";

import { Input, Space } from 'antd';
import { DatePicker } from 'antd';
import { Form, InputNumber, Button } from 'antd';


const Details = () =>{

    const { Search } = Input;
    const onSearch = value => console.log(value);
    
	return(
		<div className="Profile">

            <h2>Administrator</h2>
            <p className="text">First Name</p>
            <Input className="Search-bar" onSearch={onSearch} style={{ width: 450 }} size="default"/>
            <p className="text">Last Name</p>
            <Input className="Search-bar" onSearch={onSearch} style={{ width: 450 }} size="default"/>
            <p className="text">Email</p>
            <Input className="Search-bar" onSearch={onSearch} style={{ width: 450 }} size="default"/>
            <p className="text">Employee Number</p>
            <Input className="Search-bar" onSearch={onSearch} style={{ width: 450 }} size="default"/>
            {/* <p className="text">Batch</p>
            <DatePicker className="Search-bar" picker="year" onSearch={onSearch} style={{ width: 450 }} size="default"/>
         */}
		</div>
	);
}


export default Details;
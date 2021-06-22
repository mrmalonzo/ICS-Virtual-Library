import React, {Component} from 'react';
import '../../stylesheets/components/UpdatePublications.css';

import {updatePublication} from "../../api/";
import {Input, message} from 'antd';


class UpdatePublication extends Component{
	constructor(props){
		super(props);
		this.state={
			title:"",
			subject:"",
			authors:[],
			date:new Date(),
			keywords:[],
			publication_type:"sp",
			abstract:"", 
			poster:"",
			manuscript:"",
			sourcecode:"",
			journal:"",
			cover:""
		}
	}

	onChange = (e) =>{ //change state values if user has typed
		if(e.target.name === "authors" || e.target.name === "keywords"){ //if its the author or keyword then turn it into an array first
			var array = e.target.value.split(",");
			// console.log(array);
			this.setState({[e.target.name] : array});
		}
		else{
			this.setState({[e.target.name] : e.target.value});
		}
		
	}


	submitForm = async (e) => { //update book
		e.preventDefault(); //to not refresh the page

		const body = {	subject:this.state.subject, authors:this.state.authors, date_of_publication:this.state.date, keywords:this.state.keywords, publication_type:this.state.publication_type,
			abstract:this.state.abstract, 
			poster:this.state.poster,
			manuscript:this.state.manuscript,
			sourcecode:this.state.sourcecode,
			journal:this.state.journal,
			cover:this.state.cover
			}; //put them into one object to json

		try{
			console.log(body)
			await updatePublication(this.state.title, JSON.stringify(body)); //pass it into the api
			message.success("Publication Updated!");
		}catch(e){
			message.error("Failed to update publication.");
		}
		
	}

	render(){
		
		return(
			<div className="update-publications">
			<form onSubmit ={this.submitForm} className="update-form">
				<div className="forms">
					<label className="books-label">Title</label>
					<br/>
					<Input type="text" name="title" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="books-label">Subject</label>
					<br/>
					<Input type="text" name="subject" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="books-label">Authors</label><label className="label-mini">Put a Comma (,) as Separator for Each Keyword</label>
					<br/>
					<Input type="text" name="authors" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="books-label">Date of Publication</label>
					<br/>
					<Input type="date" name="date" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="books-label">Keywords</label><label className="label-mini">Put a Comma (,) as Separator for Each Keyword</label>
					<br/>
					<Input type="text" name="keywords" className="input" onChange={this.onChange}/>
					<br/>
					<label className="books-label">Publication Type</label>
					<br/>
					<select name="publication_type" className="input" onChange={this.onChange} required >
						<option value="sp">Special Problem</option>
						<option value="thesis">Thesis</option>
					</select>
					<br/>
					<label className="books-label">Abstract</label><label className="label-mini">Links only</label>
					<br/>
					<Input type="text" name="abstract" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="books-label">Poster</label><label className="label-mini">Links only</label>
					<br/>
					<Input type="text" name="poster" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="books-label">Manuscript</label><label className="label-mini">Links only</label>
					<br/>
					<Input type="text" name="manuscript" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="books-label">Source Code</label><label className="label-mini">Links only</label>
					<br/>
					<Input type="text" name="sourcecode" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="books-label">Journal</label><label className="label-mini">Links only</label>
					<br/>
					<Input type="text" name="journal" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="books-label">Cover</label><label className="label-mini">Links only</label>
					<br/>
					<Input type="text" name="cover" className="input" onChange={this.onChange} required/>
					<br/>
					</div>
                    <button type="submit" className="submit-book">Update</button>
			</form>
			</div>

		);
	}

}

export default UpdatePublication;
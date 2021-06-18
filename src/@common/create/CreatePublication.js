import React, {Component} from 'react';
import '../../stylesheets/components/UpdatePublications.css';

import {createPublication} from "../../api/";
import {Input, message} from 'antd';

class CreatePublication extends Component{
	constructor(props){
		super(props);
		this.state={
			title:"",
			subject:"",
			authors:[],
			date:new Date(),
			keywords:[],
			publication_type:"",
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

		const body = {	
            title: this.state.title,
            subject: this.state.subject, 
            authors: this.state.authors, 
            date_of_publication: this.state.date, 
            keywords: this.state.keywords, 
            publication_type: this.state.publication_type,
			abstract:this.state.abstract, 
			poster:this.state.poster,
			manuscript:this.state.manuscript,
			sourcecode:this.state.sourcecode,
			journal:this.state.journal,
			cover:this.state.cover
			}; //put them into one object to json

		try{

			await createPublication(JSON.stringify(body))
			message.success("Publication Created!");

		} catch(e) {
			message.error("Failed to Create Publication.");
		}
		
	}

	render(){
		
		return(
			<div className="update-books">
			<form onSubmit ={this.submitForm} className="update-form">
				<div className="forms">
					<label className="label">Title</label>
					<br/>
					<Input type="text" name="title" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="label">Subject</label>
					<br/>
					<Input type="text" name="subject" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="label">Authors</label><label className="label-mini">*put a comma (,) as seperator for each author</label>
					<br/>
					<Input type="text" name="authors" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="label">Date of Publication</label>
					<br/>
					<Input type="date" name="date" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="label">Keywords</label><label className="label-mini">*put a comma (,) as seperator for each keyword</label>
					<br/>
					<Input type="text" name="keywords" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="label">Publication Type</label>
					<br/>
					<select name="publication_type" className="input" onChange={this.onChange} required >
						<option value="sp">Special Problem</option>
						<option value="thesis">Thesis</option>
					</select>
					<br/>
					<label className="label">Abstract</label><label className="label-mini">*links only</label>
					<br/>
					<Input type="text" name="abstract" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="label">Poster</label><label className="label-mini">*links only</label>
					<br/>
					<Input type="text" name="poster" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="label">Manuscript</label><label className="label-mini">*links only</label>
					<br/>
					<Input type="text" name="manuscript" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="label">Source Code</label><label className="label-mini">*links only</label>
					<br/>
					<Input type="text" name="sourcecode" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="label">Journal</label><label className="label-mini">*links only</label>
					<br/>
					<Input type="text" name="journal" className="input" onChange={this.onChange} required/>
					<br/>
					<label className="label">Cover</label><label className="label-mini">*links only</label>
					<br/>
					<Input type="text" name="cover" className="input" onChange={this.onChange} required/>
					<br/>
					</div>
				<button type="submit" className="submit">Submit</button>
			</form>
			</div>

		);
	}

}

export default CreatePublication;
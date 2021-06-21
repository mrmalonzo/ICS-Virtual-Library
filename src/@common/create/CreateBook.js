import React, {Component} from 'react';
import '../../stylesheets/components/UpdateBooks.css';

import {createBook} from "../../api/";
import {Input, message} from 'antd';

class CreateBook extends Component{
	constructor(props){
		super(props);
		this.state={
			isbn:"",
			subject:"",
            title:"",
			authors:[],
			date:new Date(),
			keywords:[],
			cover:"",
		}
	}

	onChange = (e) =>{ //change state values if user has typed
		if(e.target.name === "authors" || e.target.name === "keywords"){ //if its the author or keyword then turn it into an array first
			var array = e.target.value.split(",");
			console.log(array);
			this.setState({[e.target.name] : array});
		}
		else{
			this.setState({[e.target.name] : e.target.value});
		}
		
	}


	submitForm = async (e) => { //update book
		e.preventDefault(); //to not refresh the page

		const body = {isbn:this.state.isbn, title:this.state.title, subject:this.state.subject, authors:this.state.authors, date_of_publication:this.state.date, keywords:this.state.keywords, cover:this.state.cover}; //put them into one object to json

        console.log(body)
		try{ //pass it into the api
			await createBook(JSON.stringify(body))
			message.success("Book Created!");
		}catch(e){
			message.error("Failed to Create book.");
		}

	}

	render(){
		
		return(
			<div className="create-books">
			<form onSubmit ={this.submitForm} className="update-form">
				<label className="books-label">ISBN</label>
				<br/>
				<Input type="text" name="isbn" className="input" onChange={this.onChange} required/>
				<br/>
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
				<Input type="text" name="keywords" className="input" onChange={this.onChange} />
				<br/>
				<label className="books-label">Cover</label><label className="label-mini">Links Only</label>
				<br/>
				<Input type="text" name="cover" className="input" onChange={this.onChange} required/>
				<br/>
				<button type="submit" className="submit-book">Create</button>
			</form>
			</div>

		);
	}

}

export default CreateBook;
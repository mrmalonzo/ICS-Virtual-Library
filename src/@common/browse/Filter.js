import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './Checkbox';
import "../../stylesheets/components/Filter.css";
import "../../stylesheets/components/Checkbox.css";

const items = [
	'journals',
	'books',
	'specialproblems',
	'thesis',
];

const items2= [
	'database',
	'ui',
	'imgprocess',
	'parallel'
];

export default class Filter extends Component {
	state = {
		journals:false,
		books:false,
		specialproblems:false,
		thesis:false,
		database:false,
		ui:false,
		imgprocess:false,
		parallel:false,
		start:new Date(),
		end:new Date
	};

	onChange = (e) =>{
		if(e.target.type === "checkbox"){
			this.setState({[e.target.name] : e.target.checked});
		}else{
			this.setState({[e.target.name] : e.target.value});
		}
	}


  	render(){
  		// console.log("Journals: " + this.state.journals);
  		// console.log("Books: " + this.state.books);
  		// console.log("SP: " + this.state.specialproblems);
  		// console.log("Thesis: " + this.state.thesis);

  		// console.log("Start Date: " + this.state.start);
  		// console.log("End Date: " + this.state.end);

  		// console.log("Database: " + this.state.database);
  		// console.log("UI/UX Design: " + this.state.ui);
  		// console.log("Image Processing: " + this.state.imgprocess);
  		// console.log("Parallel Programming: " + this.state.parallel);

  		return(
  			<div className="filter">
  				<h2 className = "filter-title">Refine Results</h2>
  				<form className="checkbox-1">
  					<h4>Academic Content</h4>
					{items.map(label => (
						<Checkbox label={label} name={label} checkedMethod = {this.onChange} key={label}/>
					))}
					
	  			
	  			</form>
	  			<form className = "sort-date">
	  				<h4>Publication Date</h4>
	  				
                    <label className="label">From </label>
                    <input className="Date-picker" type="date" name="start" key="start" onChange={this.onChange}/>
                
                    
                    <label className="label">To </label>
                    <input className="Date-picker" type="date" name="end" key="end" min={this.start} onChange={this.onChange}/>
                
	  			</form>

  				<form className="checkbox-1">
  					<h4>Subject</h4>
					{items2.map(label => (
						<Checkbox label={label} name={label} checkedMethod = {this.onChange} key={label}/>
					))}
					
	  			
	  			</form>
  			
       		</div>

  		);
  	}
}
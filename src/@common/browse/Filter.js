import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './Checkbox';
import "../../stylesheets/components/Filter.css";
import "../../stylesheets/components/Checkbox.css";

const items = [
	'Books',
	'Publications'
];


export default class Filter extends Component {
	state = {
		
		books: false,
		publications: false,
		
	};

	onChange = (e) =>{

		if (e.target.name === "Books") {

			const isChecked = (this.state.books == true ? false : true);

			this.setState({
				books: isChecked
			})

			this.props.toggleBooks(isChecked)


		} else if (e.target.name === "Publications") {

			const isChecked = (this.state.publications == true ? false : true);

			this.setState({
				publications: isChecked
			})
			this.props.togglePublication(isChecked)

		}

	}


  	render(){
  	
  		return(
  			<div className="filter">
  				<h2 className = "filter-title">Refine Results</h2>
  				<form className="checkbox-1">
  					<h4>Academic Content</h4>
					{items.map(label => (
						<Checkbox label={label} name={label} checkedMethod = {this.onChange} key={label}/>
					))}
					
	  			
	  			</form>
	  			
  			
       		</div>

  		);
  	}
}
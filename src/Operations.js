import React from 'react';

class Operations extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			showEdit: false,
			showDelete: false,
			value: ''
		};
		
		this.editTask = this.editTask.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	editTask() {
		console.log("editTask() called");
		this.setState({
			showEdit: true
		});
	};
	
	deleteTask() {
		console.log("deleteTask() called");
	}
	
	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
	}
	
	render() {
		var render = <div></div>
		if(this.state.showEdit) {
			render = 
			<form onSubmit={this.handleSubmit}>
				<label>
					Task:
					<input type="text" value={this.state.value} onChange={this.handleChange}/>
				</label>
{
/* Problem  here */
/* onEditItem() not passed */
/* calling pressed() instead to display buttons, but submit should call it */
}
				<input type="submit" value="Edit" onClick={() => this.props.onEditItem(this.state.value)} />
			</form>
		}
		else {
			render = 
			<div className="Operations">
				<h1>
					Choose an Operation to Peform
				</h1>
				<button onClick={this.editTask}>Edit</button>
				<button onClick={this.deleteTask}>Delete</button>
			</div>
		
		}
		return (
			<div>
				{render}
			</div>
		);
	}
}

export default Operations;
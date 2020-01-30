import React from 'react';

class Operations extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			showEdit: false,
			showDelete: false,
			value: this.props.value,
            index: this.props.index
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
	
	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
        this.setState({value: ''});
	}
	
	render() {
		let render = <div><p>Empty div. Will be overwritten. You should not see this.</p></div>;
		if(this.state.showEdit) {
			render = 
			<form onSubmit={this.handleSubmit}>
				<div className="formWrapper">
					<div>
						Task:
					</div>

					<div>
						<input type="text" value={this.state.value} onChange={this.handleChange}/>
					</div>

					<div>
						<button type="submit" value="Edit" onClick={() => this.props.onEditItem(this.state.value)}>Edit</button>
					</div>
				</div>
			</form>
		}
		else {
			render = 
			<div className="Operations">
				<h1>
					Choose an Operation
				</h1>
				<div id="operationsWrapper">
					<button onClick={this.editTask}>Edit</button>
					<button onClick={() => this.props.onDeleteItem(this.state.index)}>Delete</button>
					<button onClick={() => this.props.onCancel()}>Cancel</button>
				</div>
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
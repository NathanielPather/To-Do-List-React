import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({
			value: ''
		});
	}

	render() {
		return (
			<div className="Form">
				<h1>
					Add To Do List Item
				</h1>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input type="text" value={this.state.value} onChange={this.handleChange} />
					</label>
					<button type="submit" value="Submit" onClick={() => this.props.onAddItem(this.state.value)}>Add</button>
				</form>
			</div>
		);
	}
}

export default Form;
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
						<input type="text" value={this.props.test} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" onClick={() => this.props.onAddItem(this.state.value)}/>
				</form>
			</div>
		);
	}
}

export default Form;
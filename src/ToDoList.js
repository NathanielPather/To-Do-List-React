import React from 'react';
import './ToDoList.css';
import Form from './Form.js';
import Operations from './Operations.js';

class ToDoList extends React.Component {
	
	constructor(props) {
        super(props);
		this.state = {
			index: '',
			value: '',
			list: [1, 2, 3],
			showOperations: false
		};

		this.pressed = this.pressed.bind(this);
		this.onEditItem = this.onEditItem.bind(this);
	}
	
	onAddItem = (val) => {
		this.setState(state => {
			const list = state.list.concat(val);
			
			return {
				list,
				value: ''
			};
		});
	};
	
/* Display operations */
/*
	pressed = (event) => {
		console.log("Pressed");
		this.setState({showOperations: true});
	};
	*/

pressed(event, index) {
	event.preventDefault();
	console.log("Pressed");
	this.setState({
		showOperations: true,
		index: index
	});
}

	onEditItem = (val) => {
		console.log("val is " + val);
		console.log("onEditItem() called");
		this.setState(state => {
			const list = state.list.map((item, j) => {
				console.log("item is: " + item);
				console.log("j is: " + j);
				console.log("index is: " + this.state.index);
				/* problem here */
				if (j === this.state.index) {
					console.log("if block runs");
					return val;
				}
				else {
					return item
				}
			});
			return {
				showOperations: false,
				list
			};
		});
	};

	render() {
	  return (
		<div className="ToDoList">
			<div className="List">
				<h1>
				  To Do List Items
				</h1>
				<ul>
					{/*
					{this.state.list.map((item, index) => (
						<li><a href="" key={item} onClick={
							(event) => {
								this.onEditItem(index);
								event.preventDefault();
							}
						}>{item}</a></li>
					))}
					 */}
					{
						/* problem  in onClick() */
						/* calling function immediately instead of on submit */
					}
					{/*
					{this.state.list.map((item, index) => (
						<li><a href="" key={item} onClick={
							(event) => {
								this.pressed();
{

}
								this.onEditItem(index);
								event.preventDefault();
							}
						}>{item}</a></li>
					))}
			*/}

					{/*
					{this.state.list.map((item, index) => (
						<li><a href=""key={item} onClick={this.pressed}>{item}</a></li>
					))}
					*/}
					{
						/* passing onEditItem() to <a> not operations.js */
					}
					{this.state.list.map((item, index) => (
						<li><a href="" key={item} onClick={
							(event) => {
							this.pressed(event, index);
							//this.onEditItem();
						}
						}>{item}</a></li>
					))}
				</ul>
			</div>
			
			<div className="Form">
			{(this.state.showOperations) ? <Operations onEditItem={this.onEditItem}/> : <Form onAddItem={this.onAddItem}/>}
			</div>
		</div>
	  );
	}
}
export default ToDoList;







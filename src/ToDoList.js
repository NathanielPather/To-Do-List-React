import React from 'react';
import './ToDoList.css';
import Form from './Form.js';
import Operations from './Operations.js';

class ToDoList extends React.Component {
	
	constructor(props) {
        super(props);
		this.state = {
			value: '',
			list: [1, 2, 3],
			showOperations: false
		};
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
	pressed = (event) => {
		console.log("Pressed");
		this.setState({showOperations: true});
		event.preventDefault();
	};

	onEditItem = i => {
		this.setState(state => {
			const list = state.list.map((item, j) => {
				if (j === i) {
					return item + 1;
				}
				else {
					return item
				}
			});
			return {
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
					{this.state.list.map((item, index) => (
					<li><a href="" key={item} onClick={
						(event) => {
							this.onEditItem(index);
							event.preventDefault();
						}
					}>{item}</a></li>
					))}
				</ul>
			</div>
			
			<div className="Form">
			{(this.state.showOperations) ? <Operations /> : <Form onAddItem={this.onAddItem}/>}
			</div>
		</div>
	  );
	}
}
export default ToDoList;







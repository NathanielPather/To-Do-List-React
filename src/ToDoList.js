import React from 'react';
import './ToDoList.scss';
import Form from './Form.js';
import Operations from './Operations.js';

class ToDoList extends React.Component {
	
	constructor(props) {
        super(props);
		this.state = {
			item: '',
			index: '',
			value: '',
			list: ["Improve Styling", "Refactor to mySQL database", "Apply to EzyVet"],
			showOperations: false
		};

		this.pressed = this.pressed.bind(this);
		this.onEditItem = this.onEditItem.bind(this);
	}
	
	onAddItem = (val) => {
		if (val === "") {
			alert("Cannot create an empty task.\n Please enter a value.");
		}
		else {
			this.setState(state => {
				const list = state.list.concat(val);

				return {
					list,
					value: ''
				};
			});
		}
	};
	
/* Display operations */
	pressed(event, index, item) {
		event.preventDefault();
		console.log("Pressed");
		this.setState({
			showOperations: true,
			index: index,
			item: item
		});
	}

	onEditItem = (val) => {
		if (val === "") {
			alert("Cannot edit a task to be empty.\n Please enter a value.");
		}
		else {
			this.setState(state => {
				const list = state.list.map((item, j) => {
					if (j === this.state.index) {
						return val;
					} else {
						return item
					}
				});
				return {
					showOperations: false,
					list
				};
			});
		}
	};

	onDeleteItem = (index) => {
		this.setState(state => {
			const list = state.list.filter((item, j) => index !== j);

			return {
				showOperations: false,
				list
			};
		});
	};

	onCancel = () => {
		this.setState(state => {
			return {
				showOperations: false
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
						<li><button key={item} onClick={
							(event) => {
								this.pressed(event, index, item);
							}
						}>{item}</button></li>
					))}
				</ul>
			</div>
			
			<div className="Form"> {
					(this.state.showOperations) ?
						<Operations onCancel={this.onCancel} onDeleteItem={this.onDeleteItem} index={this.state.index} onEditItem={this.onEditItem} value={this.state.item}/> :
						<Form onAddItem={this.onAddItem}/>
				}
			</div>
		</div>
	  );
	}
}
export default ToDoList;







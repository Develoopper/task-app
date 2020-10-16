import React from "react";

class Task extends React.Component {
	state = {
		
	};

	render() {
		return (
			<div className="col s12 m4 l3">
				<div className="card grey darken-3">
					<div className="card-content white-text">
						<span className="card-title">{this.props.title}</span>
						<p>{this.props.content}</p>
					</div>
					<div className="card-action">
						<a href="#">Edit</a>
						<a href="#" onClick={() => this.props.delete(this.props.title)}>Delete</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Task;

import React, { Component } from 'react';
import '../App.scss';

class Action extends Component {
	render() {
		return (
			<div className="col-md-4">		
				<div className="card">
					<div className="card-header">
						<img className="img img-fluid" src={this.props.cardHeadr} alt="Action"></img>
					</div>
					<div className="card-body">	
						<h5 className="card-title"><a className="card-link a1" href="/">{this.props.cardH5}</a></h5>
						<p className="card-text"><a className="card-link a2" href="/">{this.props.cardP}</a></p>
						</div>
				</div>	
			</div>	
		)
	}
}
export default Action;
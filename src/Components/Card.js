import React, { Component } from 'react';
import '../App.scss';

class Card extends Component {
	render() {
		const { CardImage, cardtitle, cardtext, cardfooter } = this.props;
		return (
			<div className="col-md-3   mb-5 mt-5">
				<div class="card">
					<div class="card-header card-img-top d-flex">
						<a href="CardImage" className="card-link"><img className="card-img img-fluid card-img-top" src={CardImage} alt="CardImage"></img></a>
					</div>
					<div class="card-body cardBody">
						<a href="card"><h4 class="card-title">{cardtitle}</h4></a>
						<p class="card-text">{cardtext}</p>
					</div>
					<div class="card-footer d-flex cardFooter bg-white">
						<h6 className="justify-content-end ml-auto">{cardfooter}<span>⋔</span></h6>
					</div>
				</div>
			</div>
		)
	}
}
export default Card;
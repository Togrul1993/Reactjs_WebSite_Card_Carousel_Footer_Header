import React, { Component } from 'react';
import Card from './Card';
import '../App.scss';

class Cards extends Component {
	render() {
		const { cards } = this.props;
		return (
			<div className="row mb-5">
				{
					cards.map(card => {
						return (
							<Card
								key={card.id}
								CardImage={card.CardImage}
								cardtitle={card.cardtitle}
								cardtext={card.cardtext}
								cardfooter={card.cardfooter}
							/>
						)
					})
					
				}
			</div>
		)
	}
}
export default Cards;
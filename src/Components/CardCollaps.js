import React, { Component } from 'react';
import '../App.scss';

class CardCollaps extends Component {
	render() {
		const { cardImage, tarix, titleHead, pragraf } = this.props;
		return (
			<div className="col-sm-12 col-lg-6 ">
				<div className="card ColCardCarousel">
					<div className="row">
						<div className="col-sm-12 col-lg-12 d-flex">
							<div className="float-left mr-2 CardImage_A">
								<a href="CardImage">
									<img src={cardImage} alt="cardImage" className="card-img float-left img-fluid" style={{ width: "300px", height: "200px" }} />
								</a>
								
							</div>
							<div className="float-right CardImage_H4_P_Span">
								<span>{tarix}</span>
								<a href="H4"><h4 className="card-title">{titleHead}</h4></a>
								
								<p className="card-text">{pragraf}</p>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default CardCollaps;

import React, { Component } from 'react';

class CardHeader extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-10 text-center">				
						<h1 className="">Bestseller Kurslar</h1>	
					</div>
					<div className="col-md-2 d-flex text-center CardHeader">	
						<a href="DAHA" className="card-link m-auto">DAHA ÇOX</a>	
					</div>	
				</div>
			</div>
			
		)
	}
}
export default CardHeader;
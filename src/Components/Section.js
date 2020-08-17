import React, { Component } from 'react'
import '../App.scss';
class Section extends Component {
	render() {
		const { Head, Pragraf, src } = this.props;
		return (
			<div className="row SectionRow">
				<div className="col-md-12 mt-5">
					<div className="row">
					<div className="col-md-6 SectionColHP">
							<h3>{Head}</h3>
							<p>{Pragraf}</p>
					</div>
					<div className="col-md-6 SectionColImg">
						<img className="img-fluid card-img-top" src={src} alt="Card" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Section;
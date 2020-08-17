import React, { Component } from 'react';
import '../App.scss';

class Header extends Component {
	render() {
		return (
			<div className="row d-flex p-4">
				<div className="col-md-5 justify-content-start d-flex">
					<a href="/" className="link"><img src="http://itstart.az/assets/front/img/icons/logo-black.png" alt="sdhfhgfh" className="img-fluid justify-content-start mt-4 img1"/></a>	
				</div>
				
				<div className="col-md-6 d-flex justify-content-end mt-4">
					<ul className="d-flex list-inline">
						<li className="mr-4 mt-2">
							<a href="Facebook" className="link text1">
								<i className="fa fa-facebook fa-1x text1" aria-hidden="true"></i>
							</a>
						</li>

						<li className="mr-4 mt-2">
							<a href="Inistaqram" className="link text1">
								<i className="fa fa-instagram fa-1x text1" aria-hidden="true"></i>
							</a>
						</li>
					</ul>

					<span className="span mr-3 mt-2"></span>

					<ul className="d-flex list-inline">
						<li className="mr-3 mt-2 text">
							<a href="AZ" className="link  text">AZ</a>
						</li>

						<li className="mr-3 mt-2 text">
							<a href="AZ" className="link  text">RU</a>
						</li>
					</ul>
					
				</div>
	
			</div>
			
		)
	}
}
export default Header;
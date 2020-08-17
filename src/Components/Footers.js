import React, { Component } from 'react';
import '../App.scss';

class Footers extends Component {
	render() {
		const { LI1, LI2, LI3, LI4, LI5, LI6, LI7, LI8, LI9,LI10,LI11,LI12, H1, H2, H3 } = this.props;
		
		return (
			<div className="row FooterRow">
				
				<div className="col-md-5 FooterCol">
					<a href="img" className="mt-3"><img src="http://itstart.az/assets/front/img/icons/logo-white.png" alt="H1" className="img-fluid mb-3" style={{width:"190px",height:"50px"}} /></a>
					<p className="pCol1"> World Business Center, 10-cu mərtəbə, Bakı</p>
					<div className="IconDiv">
						<div className="div"><a href="https://www.facebook.com/" ><i class="fa fa-facebook " aria-hidden="true"></i></a></div>
						<div className="div"><a href="https://www.instagram.com/?hl=tr" ><i class="fa fa-instagram" aria-hidden="true"></i></a></div>
					</div>
				</div>

				<div className="col-md-2 FooterCol">
					<div className="ColDIVH4"><h4>{H1}</h4></div>
					<ul className="FooterUl">
						<a href="Li  a"><li  className="li">{LI1}</li></a>
						<a href="Li  a"><li  className="li">{LI2}</li></a>
						<a href="Li  a"><li  className="li">{LI3}</li></a>
						<a href="Li  a"><li  className="li">{LI4}</li></a>
					</ul>
				</div>

				<div className="col-md-2 FooterCol">
					<div className="ColDIVH4"><h4>{H2}</h4></div>
					<ul className="FooterUl">
						<a href="Li a"><li className="li">{LI5}</li></a>
						<a href="Li a"><li className="li">{LI6}</li></a>
						<a href="Li a"><li className="li">{LI7}</li></a>
						<a href="Li a"><li className="li">{LI8}</li></a>
					</ul>
				</div>

				<div className="col-md-2 FooterCol">
					<div className="ColDIVH4"><h4>{H3}</h4></div>
					<ul className="FooterUl">
						<div className="Divp"><p className="p">{LI9}</p></div>
						<li className="li2">{LI10}</li>
						<li className="li2">{LI11}</li>
						<li className="li3">{LI12}</li>
					</ul>
				</div>
			</div>
		)
	}
}
export default Footers;
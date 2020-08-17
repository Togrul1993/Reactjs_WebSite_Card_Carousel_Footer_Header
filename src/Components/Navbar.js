import React, { Component } from 'react';
import '../App.scss';

class Navbar extends Component {
	render() {
		return (
			
				<div className="HomeDiv">
					<ul className="HomeUl">
						<li className="ƏSAS_SƏHİFƏ"><a href="/" className="link">ƏSAS SƏHİFƏ</a></li>
						<li className="ŞİRKƏTHome">
							<div className="ŞİRKƏTDiv1">
								<a href="/" className="link">ŞİRKƏT</a>
							</div>
							
							<div className="ŞİRKƏTDiv2">
								<a href="/" className="">Haqqımızda</a>
								<a href="/" className="">Nailiyyətlər</a>
								<a href="/" className="">FAQ</a>
							</div>
						</li>
						<li className="Kurslar"><a href="/" className="link">KURSLAR</a></li>
						<li className="TƏLİMÇİLƏR"><a href="/" className="link">TƏLİMÇİLƏR</a></li>
						<li className="BLOQ"><a href="/" className="link">BLOQ</a></li>
						<li className="ƏLAQƏ"><a href="/" className="link">ƏLAQƏ</a></li>
					</ul>
				</div>
			
		)
	}
}
export default Navbar;
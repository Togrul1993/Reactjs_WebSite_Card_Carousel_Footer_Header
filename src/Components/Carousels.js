import React, { Component } from 'react';
import OwlDemo from './Collaps';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import '../owl.scss';

class Carousels extends Component {
	render() {
		const { carousels } = this.props;

		return (
			<OwlCarousel items={3} margin={2} autoplay ={true} className="owl-theme" loop nav>
				{
					carousels.map(owldemo => {
						return (
							<OwlDemo
								key={owldemo.id}
								CarouselImage={owldemo.CarouselImage}
								CarouselP={owldemo.CarouselP}
								CarouselH4={owldemo.CarouselH4}
								CarouselP2={owldemo.CarouselP2}							
							/>
							
						)
					})
				}
			 </OwlCarousel> 
		)
	}
}
export default Carousels;
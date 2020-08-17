import React,{Component} from 'react';  
import '../owl.scss';




class OwlDemo extends Component {  

       render() {  
         const { CarouselImage,CarouselP,CarouselH4,CarouselP2 } = this.props;  
         
         return (  
           <div className="m-2">
             <div className="CarouselHome">
               <div className="CarouselHomeP">
                 <p>{CarouselP}</p>  
               </div>
               <div className="CarouselHomeImgH4P">
                 <div className="CarouselHomeImgDiv"><img src={CarouselImage} alt="Carousel" /></div> 
                 <h4>{CarouselH4}</h4>
                 <p>{CarouselP2}</p>           
               </div>          
             </div>
           </div> 

        )  

      }  

      }      
export default OwlDemo  
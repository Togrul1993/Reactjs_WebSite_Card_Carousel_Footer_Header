import React, { Component } from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Action from './Components/Action';
import Action2 from './Components/Action2';
import Cards from './Components/Cards';
import CardHeader from './Components/CardHeader';
import Section from './Components/Section';
import Section2 from './Components/Section2';
import CardCollaps from './Components/CardCollaps';
import Carousels from './Components/Carousels';
import Footers from './Components/Footers';
import Image1 from './assets/image3.jpg';
import Image2 from './assets/image7.jpg';
import Image3 from './assets/image4.jpg';
import Image4 from './assets/image5.jpg';
import Image5 from './assets/image6.jpg';
import Image6 from './assets/image8.jpg';
import Image7 from './assets/image9.jpg';

import './App.scss';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import './owl.scss';




class App extends Component {
  state = {

    carousels: [

      {
        id:1,
        CarouselImage:"http://itstart.az/uploads/testimotial/arazatamov.jpg",
        CarouselP: "Start İT-də təcrübəli müəllimlər sizə İT peşəsini daha da sevdirəcək.",
        CarouselH4: "Araz Atamov",
        CarouselP2: "Tələbə"
      },
      {
        id:2,
        CarouselImage:Image1,
        CarouselP: "Start İT-də təcrübəli müəllimlər sizə İT peşəsini daha da sevdirəcək.",
        CarouselH4: "Araz Atamov",
        CarouselP2: "Tələbə"
      },
      {
        id:3,
        CarouselImage:Image2,
        CarouselP:"Start İT şirkəti cavanlarımız üçün İt sahəsində gözəl prespektivlər açır.Azər müəəlim və Cavid müəllim, sizə minnətdarlığımı bildirirəm, kursunuz çox faydalı oldu",
        CarouselH4: "Araz Atamov",
        CarouselP2: "Tələbə"
      },
       {
   id:4,
   CarouselImage:Image3,
   CarouselP:"Start İT şirkəti cavanlarımız üçün İt sahəsində gözəl prespektivlər açır.Azər müəəlim və Cavid müəllim, sizə minnətdarlığımı bildirirəm, kursunuz çox faydalı oldu",
   CarouselH4: "Araz Atamov",
   CarouselP2: "Tələbə"
      },
        {
   id:5,
   CarouselImage:Image4,
   CarouselP:"Start İT şirkəti cavanlarımız üçün İt sahəsində gözəl prespektivlər açır.Azər müəəlim və Cavid müəllim, sizə minnətdarlığımı bildirirəm, kursunuz çox faydalı oldu",
   CarouselH4: "Araz Atamov",
   CarouselP2: "Tələbə"
      },
         {
   id:6,
   CarouselImage:Image5,
   CarouselP:"Start İT şirkəti cavanlarımız üçün İt sahəsində gözəl prespektivlər açır.Azər müəəlim və Cavid müəllim, sizə minnətdarlığımı bildirirəm, kursunuz çox faydalı oldu",
   CarouselH4: "Araz Atamov",
   CarouselP2: "Tələbə"
      },
          {
   id:7,
   CarouselImage:Image6,
   CarouselP:"Start İT şirkəti cavanlarımız üçün İt sahəsində gözəl prespektivlər açır.Azər müəəlim və Cavid müəllim, sizə minnətdarlığımı bildirirəm, kursunuz çox faydalı oldu",
   CarouselH4: "Araz Atamov",
   CarouselP2: "Tələbə"
      },
           {
   id:8,
   CarouselImage:Image7,
   CarouselP:"Start İT şirkəti cavanlarımız üçün İt sahəsində gözəl prespektivlər açır.Azər müəəlim və Cavid müəllim, sizə minnətdarlığımı bildirirəm, kursunuz çox faydalı oldu",
   CarouselH4: "Araz Atamov",
   CarouselP2: "Tələbə"
 }
      
    ],


    cards: [
      {
        id:1,
        CardImage:"http://itstart.az/uploads/courses/network.png",
        cardtitle:"Şəbəkə İnzibatçılığı",
        cardtext:"Şəbəkə Administratoru kursu İT sahəsində müəyyən təcrübəyə...",
        cardfooter:"200"
      },
      {
        id: 2,
        CardImage: "http://itstart.az/uploads/courses/4.jpg",
        cardtitle: "WEB proqramlaşdırma",
        cardtext: "İnternetin sürətli inkişafı hər bir şəxsə, şirkətə veb...",
        cardfooter: "150"
      
      },
      {
        id: 4,
        CardImage: "http://itstart.az/uploads/courses/IT Specialist 3.jpg",
        cardtitle: "IT Specialist",
        cardtext: "Hal hazırda İnformasiya Texnologiyaları bazarında...",
        cardfooter: "120"
      },
      {
        id: 3,
        CardImage: "http://itstart.az/uploads/courses/1.jpg",
        cardtitle: "Uşaqlar üçün proqramlaşdırma",
        cardtext: "Məktəblilər üçün proqramlaşdırma kursları...",
        cardfooter: "120"
      }
      
      
  ]
}
  render() { 
    return (
      <div>
        
        <div className="container">
          <Header />
        </div>

        <hr />
        
        <div className="container">
          <Navbar />
          
        </div>
      


        <div className="container-fluid p-5 Action">
          
          <div className="row mt-4">
            <div className="container">
              <div className="row">
                 <Action2 />
 
                  <Action
                     cardH5="WEB Proqramlaşdırma"
                      cardP="ƏTRAFLI"
                      cardHeadr={Image2}
                />
                
 
                  <Action              
                     cardH5="Uşaqlar Üçün Proqramlaşdır ..."
                     cardP="ƏTRAFLI"
                     cardHeadr={Image1}
                />
                
              </div>
              
            
            </div>
            
          
          </div>

          
          
        </div>
       

        <div className="container mt-5">
          <div className="row">
            <CardHeader />
            <Cards cards={this.state.cards}/>
          </div>
        </div>



        <div className="container-fluid" style={{ backgroundImage: " linear-gradient(to top, #ffffff, #e8f5fe 52%, #ffffff)" }}>
          
          
          <div className="container">
            
            <div className="row">
              
              <div className="col-md-12 text-center textH">
                
                <h1>Fərqli Xüsusiyyətlərimiz</h1>
                
              </div>
              
            
            <Section
              Head="Peşəkar Təlimçilər"
              Pragraf="Start IT tədris mərkəzində çalışan təlimçilər öz işinin əsl peşəkarıdırlar. Onlar illərdi ki bu sahədə çalışır və yüzlərlə məzun yetişdiriblər. Bizim məzunlar hal-hazırda ölkəmizin böyük yerli və xarici şirkətlərində çalışırlar. Bizimlə çalışan təlimçilər IT sahəsində müvafiq sertifikatlara malikdirlər. Təlimçilərimizlə tanış olmaq və onlarla konsultasiya etmək üçün istədiyiniz zaman ofisimizə yaxınlaşa bilərsiniz."
              src="http://itstart.az/uploads/feature/photo-1557804506-669a67965ba0.jpg"
            />

             <Section2
              Head="Yaş Məhdudiyyəti Yoxdur"
              
              Pragraf="Biz 6 yaşından yuxarı bütün arzu edənləri kursumuza qəbul edirik. Dərslərimiz Azərbaycan və Rus dillərində aparılır. Aşağı yaşlı tələbələrimizə yaşlarına uyğun proqramlaşdırma və robot texnikası dərsləri keçirilir. Yuxarı yaş qruplarında proqramlaşdırma, sistem və şəbəkə administratoru və help desk kursları keçirilir."
              
              src="http://itstart.az/uploads/feature/28134479536307kids1.jpg"
              />
            
          </div>
          </div>
        </div>
        

        <div className="container-fluid mt-4 mb-5">
          <div className="container  m-4">
          <div className="row m-4">
            <div className="col-sm-10 col-lg-10 text-center">
              <h1>Son Yazılar</h1>
            </div>
            <div className="col-sm-2 col-lg-2 d-flex text-center Carousel_Icon_A">
              <a href="Daha_Cox" className="Daha_Cox">DAHA ÇOX</a>

              <a className="carousel-control-next A_I_Carousel" href="#inam" role="button" data-slide="next">
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
              
            </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-sm-12">
              <div className="carousel slide" id="inam" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="row">
                        <CardCollaps
                          cardImage="http://itstart.az/uploads/blog/5447931989instagram.jpg"
                          tarix="2020-03-24"
                          titleHead="Instagram hesabınızın təhlükəsizliyi"
                          pragraf="Son zamanlar müxtəlif tədbirlərdə, görüşlərdə və şəxsi görüşlərim zaman"
                        />

                         <CardCollaps
                          cardImage="http://itstart.az/uploads/blog/1471850798personalbrand.jpg"
                          tarix="2020-03-22"
                          titleHead="Wheel of Life Balance"
                          pragraf="Hörmətli oxuyucular,&nbsp;Sizlərə bir çox təlimlərdə istifadə e"
                        />    
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="container">
                      <div className="row">
                        <CardCollaps
                          cardImage="http://itstart.az/uploads/blog/48519588481 heyat.png" 
                          tarix="2020-03-23"
                          titleHead="IT sahəsinə necə başlamalı?"
                          pragraf="Bildiyiniz kimi Informasiya Texnologiyaları sürətlə inkişaf edir. IT-nin inkişafı bu sahəyə..."
                        /> 
                        
                         <CardCollaps
                          cardImage="http://itstart.az/uploads/blog/5447931989instagram.jpg"
                          tarix="2020-03-24"
                          titleHead="Instagram hesabınızın təhlükəsizliyi"
                          pragraf="Son zamanlar müxtəlif tədbirlərdə, görüşlərdə və şəxsi görüşlərim zaman"
                        />
                      </div>   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-flex text-center  justify-content-center" style={{marginBottom:"20px"}}> 
          <div className="row title d-flex ">
            <h1 className="m-auto d-flex">Rəylər</h1>   
          </div> 
        </div> 
        


        <div className="container"  style={{marginBottom:"20px"}}>           

            <Carousels carousels={this.state.carousels} />
            
        </div> 
        

        <div className="container-fluid FooterContainder">
          <div className="container mt-5 p-5">
            <Footers
              H1="Şirkət"
              H2="Daha Çox"
              H3="Əlaqə"
              LI1="Əsas Səhifə"
              LI2="Haqqımızda"
              LI3="Nailiyyətlər"
              LI4="FAQ"
              LI5="Kurslar"
              LI6="Təlimçilər"
              LI7="Bloq"
              LI8="Əlaqə"
              LI9="Ətraflı Məlumat Üçün:"
              LI10="+994552008939"
              LI11="+994502255583"
              LI12="azer@itstart.az"
            />
            <hr className="border-white"></hr>
            <div className="contained text-center">
              <p style={{color:"#939db4"}}>© 2020 Start IT</p>
            </div>
            
            
          </div>
        
        </div>


      </div>
      
    )
  }
}
export default App;

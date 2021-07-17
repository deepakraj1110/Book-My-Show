import React from 'react';
import Slider from 'react-slick';
import Poster from '../Poster/poster.component';
import settings from '../../config/CaroselSettings.config';
import PosImages from '../../config/TempImages.conjig';

const Peremier = () => {
   
     return(
          <div >
          <div className="py-3">
              <div className="hidden md:flex py-16">
              <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"             
              alt="Rupay"             
              className="w-full h-full"
          />
             </div>
              <div>
              <Slider {...settings}>
         { PosImages.map((image)=>(
              <Poster {...image} isDark />
          ))}
          </Slider>
              </div>
          </div>
         
          </div>
      )}

      
    


export default Peremier;
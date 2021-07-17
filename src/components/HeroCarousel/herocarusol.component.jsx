import React from "react";
import Slider from "react-slick";

import { NextArrow,PrevArrow } from "./arrow.comonent";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel= ()=>{
   const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
      };

      const settingsLG = {
        infinite: true,
        centerPadding:"300px",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        autoplay: true,
        prevArrow:<PrevArrow/>,
        nextArrow:<NextArrow/>,
      };

      const images = ["https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",     
                      "https://images.unsplash.com/photo-1626128665085-483747621778?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=610&q=80",     
                      "https://images.unsplash.com/photo-1622495894321-010d1e6db2a9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2775&q=80",     
                      "https://images.unsplash.com/photo-1626050954744-92bf034ce476?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",     
                      "https://images.unsplash.com/photo-1626074961596-cab914d9392e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80",
                      
    ];
  

return(
    <>
    <div className="lg:hidden">
    <Slider {...settings}>
      {images.map((image)=>(
          <div className="w-20 h-80  py-3 ">
              <img src={image} alt="done" className="w-full h-full"/>
          </div>
      ))} 
    </Slider>
    </div>
    <div className="hidden lg:block">
    <Slider {...settingsLG}>
      {images.map((image)=>(
          <div className="w-20 h-96 px-2 py-3 rounded-md">
              <img src={image} alt="done" className="w-full h-full"/>
          </div>
      ))} 
    </Slider>
    </div>
   
    </>
)
}

export default HeroCarousel;

import React,{ useState,useEffect} from "react";
import Slider from "react-slick";

import { NextArrow,PrevArrow } from "./arrow.comonent";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const HeroCarousel= ()=>{
  const[images, setImages]= useState([]);

  useEffect(()=> {
    const requestNowplaying=async ()=> {
     const getImages= await axios.get("/movie/now_playing");
     setImages(getImages.data.results);
    };
    requestNowplaying();

  }, []);



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

      

return(
    <>
    <div className="lg:hidden">
    <Slider {...settings}>
      {images.map((image)=>(
          <div className="w-20 h-80  py-3 ">
              <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="done" className="w-full h-full"/>
          </div>
      ))} 
    </Slider>
    </div>
    <div className="hidden lg:block">
    <Slider {...settingsLG}>
      {images.map((image)=>(
          <div className="w-20 h-96 px-2 py-3 rounded-md">
              <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="done" className="w-full h-full"/>
          </div>
      ))} 
    </Slider>
    </div>
   
    </>
)
}

export default HeroCarousel;

import React,{useContext,useState,useEffect,} from 'react';
import MovieHero from '../components/movieHero/movieHero.component';
import {FaAmazonPay,FaApplePay} from "react-icons/fa";
import Cast from '../components/Cast/Cast.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import PosImages from '../config/TempImages.conjig';
import { MovieContext } from '../context/movie.context';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';


const Movie = () => {
  const {id}=useParams();
  const[cast,setCast]=useState([]);
  const[crew,setCrew]= useState([]);
  const[SimilarMovies,setSimilarMovies]= useState([]);
  const[recommendations,setrecommendations]=useState([]);
 

  useEffect(()=>{
    const requestCrew=async()=>{
      const getCrew= await axios.get(`/movie/${id}/credits`)
      setCrew(getCrew.data.crew);
    };
    requestCrew();
  },[])
  useEffect(()=>{
    const requestCast= async ()=>{
      const getCast= await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  },[]);
  useEffect(()=>{
    const requestSimilarMovies=async()=>{
      const getSimilarMovies= await axios.get(`/movie/${id}/similar`);
      setSimilarMovies( getSimilarMovies.data.results)
    }
    requestSimilarMovies();
  },[id]);
  useEffect(()=>{
    const requestrecommendations=async()=>{
      const getrecommendations= await axios.get(`/movie/${id}/recommendations`);
      setrecommendations( getrecommendations.data.results)
    }
    requestrecommendations();
  },[id]);
  const {movie} = useContext(MovieContext);
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };
      const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
        <>
        <MovieHero/>
        <div className="container px-4 my-12 lg:ml-20 lg:w-2/3">
            <div className=" items-start gap-3 flex flex-col">
                <h2 className="text-grey-800 text-2xl font-bold ">About the movie</h2>
                <p>{movie.overview}</p>
            </div>
            <div className="my-8">
                <hr/>
            </div>
            <div className="my-8">
                <h2 className="text-grey-800 text-2xl font-bold mb-2">Applicable Offers</h2>
              <div className="flex flex-col lg:flex-row gap-3">
              <div className="flex gap-2 bg-yellow-100 p-2 border-2 border-yellow-400 rounded border-dashed">
                    <div className="w-8 h-8">
                    <FaAmazonPay className="w-full h-full"/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-gray-600 font-bold text-xl">Amazon Pay Stream Offer</h3>
                        <p className="text-gray-500"> Get 50% off up to INR 150 on all Amozon Pay on BookMyShow
                  Stream.</p>
                    </div>
                </div>
                <div className="flex gap-2 bg-yellow-100 p-2 border-2 border-yellow-400 rounded border-dashed">
                    <div className="w-8 h-8">
                    <FaApplePay className="w-full h-full"/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-gray-600 font-bold text-xl">Flimy Pass</h3>
                        <p className="text-gray-500"> Get Rs.75 off on 3 movies you buy/rent on Stream. Buy Filmy
                  Pass @Rs.99</p>
                    </div>
                </div>

              </div>

            </div>
            <div className="my-8">
                <hr/>
            </div>
            <div className="my-8">
            <h2 className="text-grey-800 text-2xl font-bold mb-2">Cast</h2>
            
              <Slider {...settingsCast}>
              {cast.map((castdata)=>
              <Cast
              src={`https://image.tmdb.org/t/p/original${castdata.profile_path}`}
              castName={castdata.original_name}
              role={castdata.character}
            />)}
              </Slider>
              </div>
            <div className="my-8">
                <hr/>
            </div>
            <div className="my-8">
            <h2 className="text-grey-800 text-2xl font-bold mb-2">Crew</h2>
            
              <Slider {...settingsCast}>
              {crew.map((crewdata)=>
              <Cast
              src={`https://image.tmdb.org/t/p/original${crewdata.profile_path}`}
              castName={crewdata.original_name}
              role={crewdata.job}
            />)}
              </Slider>
              
            
           
           
            
            </div>
            <div className="my-8">
                <hr/>
            </div>
            <div className="my-8">
             <PosterSlider
             config={ settings}
             images={SimilarMovies} 
             title="You Might Also like"
             isDark={false}/>   
            </div>
            <div className="my-8">
                <hr/>
            </div>
            <div className="my-8">
             <PosterSlider
             config={ settings}
             images={recommendations} 
             title="BMS XCLUSIVE"
             isDark={false}/>   
            </div>
            
            
        </div>
        
            
        </>
    )
}

export default Movie;

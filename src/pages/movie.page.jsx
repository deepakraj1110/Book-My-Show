import React from 'react';
import MovieHero from '../components/movieHero/movieHero.component';
import {FaAmazonPay,FaApplePay} from "react-icons/fa";
import Cast from '../components/Cast/Cast.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import PosImages from '../config/TempImages.conjig';

const movie = () => {
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
    return (
        <>
        <MovieHero/>
        <div className="container px-4 my-12 lg:ml-20 lg:w-2/3">
            <div className=" items-start gap-3 flex flex-col">
                <h2 className="text-grey-800 text-2xl font-bold ">About the movie</h2>
                <p>Bruce Wayne and Diana Prince try to bring the metahumans of Earth 
                    together after the death of Clark Kent. Meanwhile, Darkseid sends 
                    Steppenwolf to Earth with an army to subjugate humans.</p>
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
            <div className="flex flex-wrap gap-3">
            <Cast
              src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
              castName="Ben Affleck"
              role="Batman"
            />
            <Cast
              src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg"
              castName="Henry Cavil"
              role="Superman"
            />
            <Cast
              src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
              castName="Gal Gadot"
              role="Wonder Woman"
            />
            </div>
            </div>
            <div className="my-8">
                <hr/>
            </div>
            <div className="my-8">
             <PosterSlider
             config={ settings}
             images={PosImages} 
             title="You Might Also like"
             isDark={false}/>   
            </div>
            <div className="my-8">
                <hr/>
            </div>
            <div className="my-8">
             <PosterSlider
             config={ settings}
             images={PosImages} 
             title="BMS XCLUSIVE"
             isDark={false}/>   
            </div>
            
            
        </div>
        
            
        </>
    )
}

export default movie;

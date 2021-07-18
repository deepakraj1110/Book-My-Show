import React from 'react';
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.component';

import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import PosImages from '../config/TempImages.conjig';


const HomePage = () => {
    return (
        <>
        <div className="flex flex-col gap-10">
        <div className="container mx-auto my-20 px-4">
        <h1 className="text-2xl font-bold items-start">The Best of Entertainment</h1>
          < EntertainmentCardSlider/> 
          </div>
          <div className="bg-nav-800 py-16 ">
          
            <div className="container mx-auto  px-4" >
            <div className="hidden md:flex ">
              <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"             
              alt="Rupay"             
              className="w-full h-full"
          />
             </div>
           
            <PosterSlider images={PosImages} 
            title="Premier" 
            subtitle="Brand new release every friday" isDark />
            </div>
          </div>
          </div>
          <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={PosImages}
          title="Online Streaming events"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={PosImages}
          title="Outdoor Events"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={PosImages}
          title="Laghuter Therapy"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={PosImages}
          title="Popular Events"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={PosImages}
          title="The Latest Play"
          isDark={false}
        />
      </div>
          
       
          
        </>
    )
}

export default HomePage;

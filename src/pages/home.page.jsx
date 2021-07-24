import React,{useState,useEffect} from 'react';
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.component';
import Quote from '../components/Quote/quote.comonent';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import PosImages from '../config/TempImages.conjig';
import axios from 'axios';



const HomePage = () => {
  const [PopularMovies, setPopularMovies] = useState([]);
  const [Toprated, setToprated] = useState([]);
  const [UpcomingMovies, setUpcomingMovies] = useState([]);
  //const [LatestMovies, setLatestMovies] = useState([]);


  useEffect(()=>{
    const requestPopularMovies=async()=>{
      const getPoplarMovies= await axios.get("/movie/popular");
      setPopularMovies( getPoplarMovies.data.results)
    }
    requestPopularMovies();
  },[]);


  useEffect(()=>{
    const requestToprated=async()=>{
      const getToprated= await axios.get("/movie/top_rated");
      setToprated( getToprated.data.results)
    }
    requestToprated();
  },[]);


  useEffect(()=>{
    const requestUpcomingMovies=async()=>{
      const getUpcomingMovies= await axios.get("/movie/upcoming");
      setUpcomingMovies( getUpcomingMovies.data.results)
    }
    requestUpcomingMovies();
  },[]);

 /*useEffect(()=>{
    const requestLatestMovies=async()=>{
      const getLatestMovies= await axios.get("/movie/latest");
      setLatestMovies( getLatestMovies.data.results)
    }
    requestLatestMovies();
  },[]);*/

  
  
    return (
        <>
        <div >
        <Quote/>
        </div>
        <div className="container">
        <div className="flex flex-col gap-10">
        <div className="container mx-auto my-20 px-4">
        <h1 className="text-2xl font-bold items-start">The Best of Entertainment</h1>
          < EntertainmentCardSlider/> 
          </div>
          
          
          <div className="bg-nav-800 py-16 ">
          
            <div className="container px-4" >
            <div className="hidden md:flex ">
              <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"             
              alt="Rupay"             
              className="w-full h-full"
          />
             </div>
           
            <PosterSlider 
            images={PopularMovies} 
            title="Premier" 
            subtitle="Brand new release every friday" isDark />
            </div>
          </div>
          </div>
          <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={Toprated}
          title="Online Streaming events"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={UpcomingMovies}
          title="Outdoor Events"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={Toprated}
          title="Laghuter Therapy"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 my-8">
        < PosterSlider
          images={PopularMovies}
          title="Popular Events"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={UpcomingMovies}
          title="The Latest Play"
          isDark={false}
        />
      </div>
      </div>
          
       
          
        </>
    )
}

export default HomePage;

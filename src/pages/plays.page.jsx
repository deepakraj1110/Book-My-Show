import React,{useState,useEffect} from 'react';
import Poster from '../components/Poster/poster.component'; 
import PlayFilters from '../components/PlayFilters/PlayFilters.comonent';
import axios from 'axios';


const Plays = () => {
    const [tv, settv] = useState([]);


    useEffect(()=>{
      const requesttv=async()=>{
        const gettv= await axios.get("/tv/popular");
        settv( gettv.data.results)
      }
      requesttv();
     
    },[]);
    console.log(tv)
    return (
        <>
        <div className="container mx-auto px-4 my-10">
            <div className=" w-full  lg:flex lg:flex-row-reverse ">
                <div className="lg:w-3/4 ">
                <h2 className="text-2xl font-bold mb-4">Plays In Chennai</h2>
              <div className="flex flex-wrap w-1/2 md:w-1/3 lg:w-3/12 my-3 ">
           
              {tv.map((tvdata)=>
              
             <Poster {...tvdata} className="flex flex-wrap "/>)} 
            
            
           
            
              </div>
                </div>
                <div className="hidden lg:flex flex-col w-3/12 ml-6">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
                <PlayFilters  title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <PlayFilters
                title="Language"
                tags={["Tamil", "Telegu", "English"]}
              />
              <PlayFilters  title="Categories"
                tags={["Theatre",]}
              />
              <PlayFilters  title="Date"
                tags={["Drama", "Comedy", "Historical","Adaption"]}
              />
              <PlayFilters  title="More Filters"
                tags={["Online Streaming", "Kids Allowed", ]}
              />
                <PlayFilters  title="Price"
                tags={["Free","0-500","501-2000","Above 2000" ]}
              />
            </div>

            </div>
            </div>
          
        </div>
            
        </>
    )
}

export default Plays;

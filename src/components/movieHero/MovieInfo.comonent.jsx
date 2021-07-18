import React from 'react'

const MovieInfo = () => {
    return (
        <>
        <div className="flex flex-col gap-3 lg:gap-10">
            <div className="flex items center gap-3 md:px-4">
                <div className="w-40 h-8">
                    <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                    alt="premier"
                    className="w-full h-full" />
                </div>
                <span className="bg-nav-800 rounded-md text-white text-xs p-1">Streaming now</span>
            </div>
            <h1 className="text-5xl hidden text-white font-bold lg:block ">Justice League</h1>
            <div className="text-white gap-3 lg:gap-5 flex flex-col-reverse lg:flex-col">
                <div className="text-white gap-2 font-light flex flex-col md:px-4 ">
                  <h4> 4k &bull; English &bull; Action</h4>
                  <h4>1h 53m &bull; Action, Sci-Fi, Thriller &bull; 13+</h4>
                </div>
               <div className="gap-3 flex items-center md:w-screen lg:w-full md:px-4">
               <button className="bg-red-500 py-3 w-full font-semibold rounded-lg ">
                    Rent ₹149
                </button>
                <button className="bg-red-500 py-3 w-full font-semibold rounded-lg">
                    Buy ₹149
                </button>
               </div>
            </div>
        </div>
            
        </>
    )
}

export default MovieInfo;

import React,{useContext} from 'react';
import MovieInfo from './MovieInfo.comonent';
import { MovieContext } from '../../context/movie.context';


const MovieHero = () => {
    const{movie}=useContext(MovieContext)
    return (
        <>
        <div>
            <div className="md:hidden w-full relative" style={{height:"calc(180vw)"}}>
            <div className="absolute z-20 bottom-4 flex left-4">
                 <MovieInfo/>
                              </div>
           
            <div className="bg-black w-full h-56 absolute bottom-0 bg-opacity-50 z-10"/>
              
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="poster"
                    className="h-full w-full" />
                   
                
            </div>
            <div className="hidden md:block w-full lg:hidden relative" style={{height:"calc(100vw)"}}>
            <div className="bg-black w-full h-52 absolute bottom-0 bg-opacity-70 z-10"/>
            <div className="absolute z-20 bottom-4 flex">
                 <MovieInfo/>
                              </div>
           
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="poster"
                    className="h-full w-full" />
                
            </div>
            <div className="hidden lg:block w-full relative" style={{height:"30rem"}}>
            <div className="absolute w-full h-full z-10" style={{backgroundImage:
                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}/>
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt="poster"
                    className="h-full w-full" />
                    <div className="absolute top-10 left-24 flex items-center z-30 gap-10">
                        <div className="w-64 h-96">
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                              alt="poster"
                              className="w-full h-full rounded-xl"/>
                              
                        </div>
                        <div>
                                  <MovieInfo/>
                              </div>

                    </div>
                    
            </div>
        </div>
        </>
    )
}

export default MovieHero;

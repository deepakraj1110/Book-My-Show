import React,{useContext,useState} from 'react';
import { MovieContext } from '../../context/movie.context';
import PaymentModal from '../PaymentModal/PaymentModal.component';

const MovieInfo = () => {
    const[isOpen, setIsOpen]=useState(false);
    const[price,setPrice]=useState(0);
    const{movie}= useContext(MovieContext);
    const genres=movie.genres?.map(({name})=>name).join(", ");

    const rentMovies = ()=>{
        setIsOpen(true);
        setPrice(149);
    };
    const buyMovies = ()=>{
        setIsOpen(true);
        setPrice(499);
    };
    return (
        <>
        <PaymentModal isOpen={isOpen}  setIsOpen={ setIsOpen} price={price} setPrice={setPrice}/>
        <div className="flex flex-col gap-3 lg:gap-10">
            <div className="flex items-center gap-3 md:px-4">
                <div className="w-40 h-8">
                    <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                    alt="premier"
                    className="w-full h-full" />
                </div>
                <span className="bg-nav-800 rounded-md text-white text-xs items-center p-2">Streaming now</span>
            </div>
            <h1 className="text-5xl hidden text-white font-bold lg:block ">{movie.original_title}</h1>
            <div className="text-white gap-3 lg:gap-5 flex flex-col-reverse lg:flex-col">
                <div className="text-white gap-2 font-light flex flex-col md:px-4 ">
                  <h4> &bull; {movie.original_language} &bull; {(movie.runtime/60).toFixed(2)} h</h4>
                  <h4> &bull; {genres} </h4>
                </div>
               <div className="gap-3 flex items-center md:w-screen lg:w-full md:px-4">
               <button onClick={rentMovies} className="bg-red-500 py-3 w-full font-semibold rounded-lg ">
                    Rent ₹149
                </button>
                <button onClick={buyMovies} className="bg-red-500 py-3 w-full font-semibold rounded-lg">
                    Buy ₹499
                </button>
               </div>
            </div>
        </div>
            
        </>
    )
}

export default MovieInfo;

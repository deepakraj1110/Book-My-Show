import React from 'react';
import {Link} from 'react-router-dom';


const Poster = (props) => {
   
    return (
        <Link to={`/movie/${props.id}`}>
        <div className="gap-3 px-1 md:px-3 flex flex-col items-start ">
        <div className="h-60 md:h-80">
            <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-xl" />
        </div>
        <h3 className={`text-lg font-bold ${props.isDark?"text-white":"text-grey-700"}`}>{props.original_title}</h3>
        <p className={`text-sm  ${props.isDark?"text-white":"text-grey-700"}`}>{props.release_date}</p>
        </div>
        </Link>
    )
}

export default Poster;

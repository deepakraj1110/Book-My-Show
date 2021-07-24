import React,{useContext} from "react";
import {BiChevronRight,BiSearchAlt,BiChevronDown,BiMenu,BiShareAlt} from "react-icons/bi";
import { MovieContext } from "../../context/movie.context"; 

const NavSm = () => {
    const {movie}=useContext(MovieContext);
    return(
     <>
      <div className="flex items-center text-white justify-between ">
        <div >
         <h3 className="text-2xl font-bold">{movie.original_title}</h3>
         </div>
         <div className="w-8 h-8">
         <BiShareAlt className="w-full h-full"/>
         </div>
         
      </div>
     </>
    );
};

const NavLg =()=>{
    return(
        <>
         <div className=" flex items-center justify-between  container mx-auto px-4">
         <div className=" flex w-1/2">
        <div className="w-12 h-12 gap-2">
            <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full"/>
        </div>
        <div className="flex items-center gap-3 w-full bg-white rounded-sm py-2 px-3">
     <BiSearchAlt className="w-6 h-6"/>
     <input type="search" placeholder="Search for movies, events, Plays, Sports and Activities."
     className="w-full bg-transparent border-none focus:outline-none"/>
     </div>
         </div>
         <div className="flex items-center gap-3 cursor-pointer text-white">
             <h4 className="flex text-gray-200 text-xm items-center hover:text-white ">Chennai <BiChevronDown/></h4>
             <button className="bg-red-600 px-3 rounded gap-3"> Sign in</button>
            <BiMenu className="w-8 h-8"/>
         </div>
         </div>
        </>
    )
};

const NavbarMovie =()=>{
return(
    <>
     <nav  className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-nav-700 p-4" >
        <div className="md:hidden">
             <NavSm/> 
        </div>
        <div className="hidden md:block lg:hidden">
            <NavSm/>
        </div>
        <div className="hidden w-full lg:flex">
            <NavLg/>
        </div>
     </nav>
    </>
)
};

export  default NavbarMovie  ;

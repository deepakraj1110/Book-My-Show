import React from "react";
import {BiChevronRight,BiSearchAlt,BiChevronDown,BiMenu} from "react-icons/bi"; 

const NavSm = () => {
    return(
     <>
      <div className="flex items-center text-white justify-between ">
        <div >
         <h3 className="text-2xl font-bold"> It All Starts Here!</h3>
         <span className="flex items-center text-grey-400 text-xs">Chennai <BiChevronRight/>
         </span>
        </div>
         <div className="w-8 h-8">
         <BiSearchAlt className="w-full h-full"/>
         </div>
         
      </div>
     </>
    );
};
const NavMd =()=>{
    return(
    <>
     <div className="flex items-center gap-3 w-full bg-white rounded-sm py-2 px-3">
     <BiSearchAlt/>
     <input type="search" placeholder="Search for movies, events, Plays, Sports and Activities."
     className="w-full bg-transparent border-none focus:outline-none"/>
     </div>
    </>
    )};
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

const Navbar =()=>{
return(
    <>
     <nav  className="bg-nav-700 p-4" >
        <div className="md:hidden">
             <NavSm/> 
        </div>
        <div className="hidden md:flex lg:hidden">
            <NavMd/>
        </div>
        <div className="hidden w-full lg:flex">
            <NavLg/>
        </div>
     </nav>
    </>
)
};

export  default Navbar;

import React from "react";
import Navbar from "../components/NavBar/navbar.component";
import HeroCarousel from "../components/HeroCarousel/herocarusol.component";
import Quote from "../components/Quote/quote.comonent";

const Defaultlayout = (props) =>{
    return (
    <>
     <Navbar/>
     <HeroCarousel/>
     <Quote/>
     <div>
    
     </div>
     {props.children}
    </>
    );
};

export default Defaultlayout;

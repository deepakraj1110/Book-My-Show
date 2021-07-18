import React from "react";
import NavbarMovie from "../components/NavBar/navbarMovie.component";
import HeroCarousel from "../components/HeroCarousel/herocarusol.component";
import Quote from "../components/Quote/quote.comonent";

const Moivelayout = (props) =>{
    return (
    <>
    
     <NavbarMovie/>
     {props.children}
    </>
    );
};

export default Moivelayout;
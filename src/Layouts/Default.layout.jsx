import React from "react";
import Navbar from "../components/NavBar/navbar.component";
import HeroCarousel from "../components/HeroCarousel/herocarusol.component";


const Defaultlayout = (props) =>{
    return (
    <>
     <Navbar/>
     <HeroCarousel/>
     {props.children}
    </>
    );
};

export default Defaultlayout;

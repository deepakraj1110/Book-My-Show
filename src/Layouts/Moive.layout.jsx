import React,{useContext,useEffect} from "react";
import NavbarMovie from "../components/NavBar/navbarMovie.component";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/movie.context";
import axios from "axios";

const Moivelayout = (props) =>{
    const{id}=useParams();
    const {movie,setMovie}=  useContext(MovieContext);

    useEffect(()=>{
        const requestMovies = async()=>{
    const getMovies= await axios.get(`/movie/${id}`);
    setMovie(getMovies.data);
        } ;
      requestMovies();
    },[id]);
  

    return (
    <>
    
     <NavbarMovie/>
     {props.children}
    </>
    );
};

export default Moivelayout;
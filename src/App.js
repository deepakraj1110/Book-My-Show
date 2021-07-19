
 import { Route } from "react-router-dom";
 import DefaultHOC from "./HOC/Default.HOC"; 
 import Temp from "./components/temp";
 import HomePage from "./pages/home.page";
 import MovieHOC from "./HOC/Moive.HOC";
 import movie from "./pages/movie.page";
 import Plays from "./pages/plays.page";
 
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
 function App() {
   return (
    <>
     <DefaultHOC path="/" exact component={HomePage}/>
     <MovieHOC path="/movie/:id" exact component={movie}/>
     <DefaultHOC path="/plays" exact component={Plays}/>

     

     
    </>
   
   );
 }
 
 
 

export default App;

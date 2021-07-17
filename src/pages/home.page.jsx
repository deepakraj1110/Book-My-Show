import React from 'react';
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.component';
import Peremier from '../components/Peremier/peremier.component';
 const HomePage = () => {
    return (
        <>
        <div className="container mx-auto my-20 px-4">
        <h1 className="text-2xl font-bold items-start">The Best of Entertainment</h1>
          < EntertainmentCardSlider/> 
          </div>
          <div className="bg-nav-800">
            <div className="container mx-auto  px-4" >
            
            <Peremier/>
            </div>
          </div>
          
       
          
        </>
    )
}

export default HomePage;

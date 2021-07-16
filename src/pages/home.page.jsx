import React from 'react';
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.component';
 const HomePage = () => {
    return (
        <>
        <div className="container mx-auto my-20 px-4">
        <h1 className="text-2xl text-bold ">The Best of Entertainment</h1>
          < EntertainmentCardSlider/> 
        </div>
          
        </>
    )
}

export default HomePage;

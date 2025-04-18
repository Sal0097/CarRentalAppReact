import React from "react";
import { useNavigate } from "react-router-dom";
import vid1 from './assets/vid1.mp4';
import rentcar from './assets/rentcar.jpg';
import soloTravel from './assets/soloTravel.jpg';

function WelcomePage() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/select-car');
  };

  return (
    <div className="text-center container mx-auto px-4 md:px-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our One-Stop Car Rental Site!</h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <img src={rentcar} alt="Car Rental" className="w-full md:w-[400px] h-[200px] md:h-[260px] rounded-lg object-cover" />
        <video src={vid1} loop autoPlay muted className="w-full md:w-[400px] h-[200px] md:h-[260px] rounded-lg object-cover" />
        <img src={soloTravel} alt="Solo Travel" className="w-full md:w-[400px] h-[200px] md:h-[260px] rounded-lg object-cover" />
      </div>

      <div className="mt-10">
        <p className="text-lg mb-4">Looking for a reliable car rental? We've got you covered!</p>
        <button
          onClick={handleExploreClick}
          className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105"
        >
          Explore Our Rental Options Now!
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
    
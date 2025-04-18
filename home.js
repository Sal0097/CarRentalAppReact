import React, { useState } from 'react';
import hatchback from './assets/hatchback.jpg';
import sedan from './assets/Sedan.jpg';
import bike from './assets/bike.jpg';
import suv from './assets/suv.jpg';
import van from './assets/van.jpg';
import scooter from './assets/scooter.jpg';

const VehicleRecommendation = () => {
  const [passengers, setPassengers] = useState(0);

  const vehicles = [
    { id: 1, name: 'Bike', capacity: 2, type: '1 to 2 seater', image: bike },
    { id: 2, name: 'Scooty', capacity: 2, type: '2 seater', image: scooter },
    { id: 3, name: 'Hatchback', capacity: 4, type: '4 seater', image: hatchback },
    { id: 4, name: 'Sedan', capacity: 4, type: '4 seater', image: sedan },
    { id: 5, name: 'SUV', capacity: 6, type: '6 seater', image: suv },
    { id: 6, name: 'Minivan', capacity: 9, type: '9 seater', image: van },
  ];

  const getRecommendedVehicles = () => {
    return vehicles.filter(vehicle => vehicle.capacity >= passengers);
  };

  return (
    <div className="p-4 max-w-5xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-md shadow-md mt-8 mb-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Car Rental</h1>
      <label className="block mb-4 text-gray-800 dark:text-gray-200">
        Number of Passengers:
        <input
          type="number"
          value={passengers}
          onChange={(e) => setPassengers(Math.max(1, parseInt(e.target.value) || 1))}
          min="1"
          className="block w-full p-2 border border-gray-300 dark:border-gray-600 rounded mt-1 bg-white dark:bg-gray-700 dark:text-gray-200"
        />
      </label>

      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Suggested Vehicles</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {getRecommendedVehicles().length > 0 ? (
          getRecommendedVehicles().map(vehicle => (
            <li key={vehicle.id} className="bg-white dark:bg-gray-700 rounded-md overflow-hidden shadow">
              <div className="aspect-w-16 aspect-h-9">
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{vehicle.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{vehicle.type}</p>
              </div>
            </li>
          ))
        ) : (
          <li className="text-gray-900 dark:text-gray-200 col-span-full">No suitable vehicles found for the selected number of passengers.</li>
        )}
      </ul>
    </div>
  );
};

export default VehicleRecommendation;

// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const destinations = [
  { name: "Jaipur", image: `${process.env.PUBLIC_URL}/images/jaipur.jpg` },
  { name: "Goa", image: `${process.env.PUBLIC_URL}/images/goa.jpg` },
  { name: "Ladakh", image: `${process.env.PUBLIC_URL}/images/ladakh.jpg` },
  { name: "Munnar", image: `${process.env.PUBLIC_URL}/images/munnar.jpg` },
  { name: "Ooty", image: `${process.env.PUBLIC_URL}/images/ooty.jpg` },
  { name: "Kolkata", image: `${process.env.PUBLIC_URL}/images/kolkata.jpg` },
  { name: "Kerala", image: `${process.env.PUBLIC_URL}/images/kerala.jpg` },
];

const Home = () => (
  <div className="text-center">
    <div
      className="relative bg-cover bg-center h-[400px] rounded-xl overflow-hidden shadow-lg"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/kerala.jpg)` }}
    >
      <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center">
        <div className="text-white p-6">
          <h2 className="text-5xl font-bold mb-4 animate-pulse">
            Welcome to Explore India
          </h2>
          <p className="text-xl mb-6">
            Explore the most beautiful places in India with us!
          </p>
          <Link
            to="/bookings"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded shadow-lg transition-transform transform hover:scale-105"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>

    <h3 className="text-3xl font-semibold mt-12 mb-6">Top Destinations</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
      {destinations.map((place) => (
        <div
          key={place.name}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
        >
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h4 className="text-xl font-bold mb-2">{place.name}</h4>
            <p>Discover the magic of {place.name} with our travel packages.</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Home;

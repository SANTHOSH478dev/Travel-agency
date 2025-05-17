import React from "react";

const Gallery = () => {
  const images = [
    "jaipur.jpg",
    "goa.jpg",
    "ladakh.jpg",
    "munnar.jpg",
    "ooty.jpg",
    "kolkata.jpg",
    "Kerala.jpg",
  ];
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <img
            key={i}
            src={"/images/" + img}
            alt={img}
            className="rounded-xl shadow-md hover:scale-105 transform transition duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

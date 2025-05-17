import React from "react";

const testimonials = [
  { name: "Aarav Sharma", review: "Wonderful experience!", location: "Delhi" },
  {
    name: "Sneha Reddy",
    review: "Truly professional service!",
    location: "Hyderabad",
  },
  {
    name: "Kiran Patel",
    review: "Loved every moment of our trip!",
    location: "Ahmedabad",
  },
];

const Testimonials = () => (
  <div className="p-10 bg-white min-h-screen">
    <h2 className="text-4xl font-bold text-center mb-10">
      What Our Customers Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="border p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold">{t.name}</h3>
          <p className="text-gray-600 italic">"{t.review}"</p>
          <p className="text-sm text-gray-400 mt-2">{t.location}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;

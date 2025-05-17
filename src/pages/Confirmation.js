import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;

  if (!booking) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-red-600">
          No booking details found.
        </h2>
        <button
          onClick={() => navigate("/bookings")}
          className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Go to Bookings
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded shadow-lg mt-12 text-center">
      <div className="inline-block mb-4 p-4 rounded-full bg-green-100">
        <svg
          className="w-16 h-16 text-green-600 mx-auto"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 className="text-3xl font-bold mb-4 text-green-700">
        Booking Confirmed!
      </h2>
      <p className="mb-6 text-gray-700">
        Thank you, <span className="font-semibold">{booking.name}</span>, for
        booking your trip to{" "}
        <span className="font-semibold">{booking.destination}</span>.
      </p>
      <div className="text-left max-w-md mx-auto bg-gray-100 p-4 rounded shadow-inner">
        <p>
          <strong>Email:</strong> {booking.email}
        </p>
        <p>
          <strong>Phone:</strong> {booking.phone}
        </p>
        <p>
          <strong>Travel Dates:</strong> {booking.startDate} to{" "}
          {booking.endDate}
        </p>
        <p>
          <strong>Number of Travelers:</strong> {booking.travelers}
        </p>
      </div>
      <button
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Back to Home
      </button>
    </div>
  );
}

export default Confirmation;

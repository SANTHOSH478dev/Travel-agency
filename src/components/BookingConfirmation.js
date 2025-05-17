// BookingConfirmation.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function BookingConfirmation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const savedBookings =
      JSON.parse(localStorage.getItem(`bookings_${user.username}`)) || [];
    const foundBooking = savedBookings.find((b) => String(b.id) === String(id));
    if (foundBooking) {
      setBooking(foundBooking);
    }
  }, [id, user, navigate]);

  if (!booking) {
    return (
      <div className="text-center mt-10 text-red-600">
        No booking details found.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded shadow-lg">
      <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
        🎉 Booking Confirmed!
      </h2>
      <ul className="text-lg space-y-2">
        <li>
          <strong>Name:</strong> {booking.name}
        </li>
        <li>
          <strong>Email:</strong> {booking.email}
        </li>
        <li>
          <strong>Phone:</strong> {booking.phone}
        </li>
        <li>
          <strong>Destination:</strong> {booking.destination}
        </li>
        <li>
          <strong>Start Date:</strong> {booking.startDate}
        </li>
        <li>
          <strong>End Date:</strong> {booking.endDate}
        </li>
        <li>
          <strong>Travelers:</strong> {booking.travelers}
        </li>
      </ul>
      <div className="mt-6 text-center">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
          onClick={() => navigate("/bookings")}
        >
          View All Bookings
        </button>
      </div>
    </div>
  );
}

export default BookingConfirmation;

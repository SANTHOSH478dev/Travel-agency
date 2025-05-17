import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function BookingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true); // NEW: track loading state

  useEffect(() => {
    if (!user) {
      // If user not logged in, redirect to login page
      navigate("/login");
      return;
    }

    const savedBookings =
      JSON.parse(localStorage.getItem(`bookings_${user.username}`)) || [];

    // Convert id param and booking id to string for safe comparison
    const found = savedBookings.find((b) => String(b.id) === String(id));

    if (found) {
      setBooking(found);
    } else {
      // OLD: Redirect to bookings page if no matching booking found
      // navigate("/bookings");

      // NEW: Instead of redirecting, just set booking to null
      setBooking(null);
    }
    setLoading(false); // NEW: done loading
  }, [id, user, navigate]);

  if (loading) {
    return (
      <div className="p-10 text-center text-indigo-600">
        Loading booking details...
      </div>
    );
  }

  if (!booking) {
    // NEW: Show friendly message instead of redirect
    return (
      <div className="p-10 text-center text-red-600">
        <p>Booking not found.</p>
        <button
          onClick={() => navigate("/bookings")}
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Back to Bookings
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Booking Details
      </h2>
      <div className="space-y-3 text-lg">
        <p>
          <strong>Name:</strong> {booking.name}
        </p>
        <p>
          <strong>Email:</strong> {booking.email}
        </p>
        <p>
          <strong>Phone:</strong> {booking.phone}
        </p>
        <p>
          <strong>Destination:</strong> {booking.destination}
        </p>
        <p>
          <strong>Start Date:</strong> {booking.startDate}
        </p>
        <p>
          <strong>End Date:</strong> {booking.endDate}
        </p>
        <p>
          <strong>Travelers:</strong> {booking.travelers}
        </p>
      </div>

      <button
        onClick={() => navigate("/bookings")}
        className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Back to Bookings
      </button>
    </div>
  );
}

export default BookingDetails;

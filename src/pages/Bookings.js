import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const destinations = [
  "Jaipur",
  "Goa",
  "Custom Destination",
  "Kerala",
  "Ooty",
  "Kolkata",
  "Ladakh",
  "Munnar",
];

function Bookings() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [form, setForm] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    destination: destinations[0],
    startDate: "",
    endDate: "",
    travelers: 1,
    status: "confirmed",
  });

  const [errors, setErrors] = useState({});
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState({ destination: "", date: "" });
  const [notification, setNotification] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (user && user.username) {
      const savedBookings =
        JSON.parse(localStorage.getItem(`bookings_${user.username}`)) || [];
      setBookings(savedBookings);
    } else {
      setBookings([]);
    }
    setIsInitialLoad(true);
  }, [user]);

  useEffect(() => {
    if (user && user.username) {
      if (isInitialLoad) {
        setIsInitialLoad(false);
        return;
      }
      localStorage.setItem(
        `bookings_${user.username}`,
        JSON.stringify(bookings)
      );
    }
  }, [bookings, user, isInitialLoad]);

  const validate = () => {
    const tempErrors = {};
    if (!form.name.trim()) tempErrors.name = "Name is required";
    if (!form.email.trim()) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      tempErrors.email = "Email is invalid";
    if (!form.phone.trim()) tempErrors.phone = "Phone is required";
    if (!form.startDate) tempErrors.startDate = "Start date is required";
    if (!form.endDate) tempErrors.endDate = "End date is required";
    if (form.travelers < 1)
      tempErrors.travelers = "Number of travelers must be at least 1";
    return tempErrors;
  };

  const resetForm = () => {
    setForm({
      id: null,
      name: "",
      email: "",
      phone: "",
      destination: destinations[0],
      startDate: "",
      endDate: "",
      travelers: 1,
      status: "confirmed",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      if (form.id) {
        setBookings((prev) =>
          prev.map((b) => (b.id === form.id ? { ...form } : b))
        );
        setNotification("Booking updated successfully!");
      } else {
        const newBooking = { ...form, id: Date.now(), status: "confirmed" };
        setBookings((prev) => [...prev, newBooking]);
        setNotification("Booking confirmed successfully!");
        setTimeout(() => {
          navigate("/bookings");
        }, 1500);
      }
      resetForm();
      setShowForm(false);
      setTimeout(() => setNotification(""), 3000);
    }
  };

  const handleEdit = (booking) => {
    setForm(booking);
    setShowForm(true);
  };

  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      setBookings((prev) => prev.filter((b) => b.id !== id));
      setNotification("Booking cancelled.");
      if (form.id === id) {
        resetForm();
        setShowForm(false);
      }
      setTimeout(() => setNotification(""), 3000);
    }
  };

  const filteredBookings = bookings.filter((b) => {
    const matchesDestination = filter.destination
      ? b.destination.toLowerCase().includes(filter.destination.toLowerCase())
      : true;
    const matchesDate = filter.date ? b.startDate === filter.date : true;
    return matchesDestination && matchesDate;
  });

  if (!user) {
    return (
      <div className="p-10 text-center text-red-600 font-semibold">
        Please login to book and view your bookings.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-12">
      <h2 className="text-4xl font-extrabold mb-8 text-indigo-700 text-center">
        Book Your Trip
      </h2>

      {notification && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg z-50 font-medium">
          {notification}
        </div>
      )}

      {!showForm && (
        <div className="mb-8 text-center">
          <button
            onClick={() => setShowForm(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300"
          >
            New Booking
          </button>
        </div>
      )}

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 bg-gray-50 p-6 rounded-lg shadow-inner"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border p-2 rounded"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border p-2 rounded"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm">{errors.phone}</p>
          )}

          <select
            name="destination"
            value={form.destination}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            {destinations.map((dest) => (
              <option key={dest} value={dest}>
                {dest}
              </option>
            ))}
          </select>

          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <label className="text-sm text-gray-600 mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              {errors.startDate && (
                <p className="text-red-600 text-sm">{errors.startDate}</p>
              )}
            </div>

            <div className="flex flex-col flex-1">
              <label className="text-sm text-gray-600 mb-1">End Date</label>
              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              {errors.endDate && (
                <p className="text-red-600 text-sm">{errors.endDate}</p>
              )}
            </div>
          </div>

          <input
            type="number"
            name="travelers"
            min="1"
            value={form.travelers}
            onChange={handleChange}
            placeholder="Number of Travelers"
            className="border p-2 rounded"
          />
          {errors.travelers && (
            <p className="text-red-600 text-sm">{errors.travelers}</p>
          )}

          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded shadow-md"
            >
              {form.id ? "Update Booking" : "Confirm Booking"}
            </button>
            <button
              type="button"
              onClick={() => {
                resetForm();
                setShowForm(false);
              }}
              className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-6 py-2 rounded shadow-md"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <section className="mt-14">
        <h3 className="text-3xl font-semibold mb-6 text-indigo-700 text-center">
          Booking History
        </h3>

        {/* Filters can go here */}

        {filteredBookings.length === 0 ? (
          <p className="text-center text-gray-500 italic">
            No bookings found matching your criteria.
          </p>
        ) : (
          filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="border border-gray-300 rounded-lg p-6 mb-6 bg-white shadow-sm"
            >
              <Link
                to={`/booking/${booking.id}`}
                className="text-indigo-700 font-bold text-xl hover:underline"
              >
                {booking.destination} &nbsp;|&nbsp; {booking.startDate} to{" "}
                {booking.endDate}
              </Link>

              <div className="mt-3 space-y-1 text-gray-700">
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
                  <strong>Travelers:</strong> {booking.travelers}
                </p>
                <p className="text-green-700 font-semibold">
                  <strong>Status:</strong> {booking.status}
                </p>
              </div>

              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => handleEdit(booking)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded shadow-md transition duration-300"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleCancel(booking.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded shadow-md transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default Bookings;

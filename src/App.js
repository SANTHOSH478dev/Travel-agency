import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/login";
import Bookings from "./pages/Bookings";
import BookingDetails from "./pages/BookingDetails";
import BookingConfirmation from "./components/BookingConfirmation";
import CustomDestination from "./pages/CustomDestination";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Confirmation from "./pages/Confirmation";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen px-4 py-6 bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/booking/:id" element={<BookingDetails />} />
          <Route path="/booking/:id" element={<BookingConfirmation />} />
          <Route path="/custom-destination" element={<CustomDestination />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

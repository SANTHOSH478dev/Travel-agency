import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ Import useAuth

const Navbar = () => {
  const { user, logout } = useAuth(); // ✅ Destructure user & logout

  return (
    <header className="bg-blue-700 text-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Explore India</h1>

        <nav className="space-x-4 flex items-center">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/bookings" className="hover:underline">
            Bookings
          </Link>
          <Link to="/custom-destination" className="hover:underline">
            Custom
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>

          {!user && (
            <>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/register" className="hover:underline">
                Register
              </Link>
            </>
          )}

          {user && (
            <button
              onClick={logout}
              className="bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-100 transition"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

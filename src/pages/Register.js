import React from "react";
import { Link } from "react-router-dom";

const Register = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-600 via-red-500 to-red-700">
    <div className="bg-white text-gray-900 rounded-xl p-10 w-96 shadow-2xl max-w-full">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-red-600">
        Create an Account
      </h2>
      <form className="space-y-6">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-red-400 transition"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-red-400 transition"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-red-400 transition"
        />
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-md"
        >
          Register
        </button>
      </form>
      <p className="mt-8 text-center text-gray-600 text-sm">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-red-600 font-semibold hover:underline"
        >
          Login here
        </Link>
      </p>
    </div>
  </div>
);

export default Register;

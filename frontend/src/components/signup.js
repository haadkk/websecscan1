import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    try {
      await axios.post("http://127.0.0.1:8000/api/users/register/", formData);
      alert("Registration successful! Please log in.");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error(error.response.data);
      setError(error.response.data); 
    }
  };

  const isPasswordValid = formData.password.length >= 8;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Sign Up</h2>
        
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white mb-4"
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white mb-4"
          required
        />
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white mb-2"
          required
        />
        <p className={`text-sm ${isPasswordValid ? "text-green-400" : "text-red-400"} mb-4`}>
          Password must be 8 or more characters.
        </p>
        
        {error && (
          <div className="text-red-500 text-sm mb-4">
            {error.username && <p>{error.username[0]}</p>}
            {error.email && <p>{error.email[0]}</p>}
            {error.password && <p>{error.password[0]}</p>}
          </div>
        )}

        <button
          type="submit"
          className={`w-full py-2 rounded-lg text-white ${isPasswordValid ? "bg-blue-500" : "bg-gray-600 cursor-not-allowed"}`}
          disabled={!isPasswordValid}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

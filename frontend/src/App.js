import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/signin";
import SignUpPage from "./components/signup";
import LandingPage from "./components/landingpage";
import R from "./components/R"; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

 
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsAuthenticated(!!token); 
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Routes>
          {/* Default Route: Redirect to Login if not authenticated */}
          <Route
            path="/"
            element={
              isAuthenticated ? <Navigate to="/landing" replace /> : <Navigate to="/login" replace />
            }
          />

          {/* Login Page */}
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/landing" replace />
              ) : (
                <LoginPage setAuth={setIsAuthenticated} />
              )
            }
          />

          {/* Sign Up Page */}
          <Route
            path="/signup"
            element={
              isAuthenticated ? (
                <Navigate to="/landing" replace />
              ) : (
                <SignUpPage />
              )
            }
          />

          {/* Landing Page */}
          <Route
            path="/landing"
            element={
              isAuthenticated ? (
                <LandingPage handleLogout={handleLogout} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Result  Page */}
          <Route
            path="/results"
            element={
              isAuthenticated ? (
                <R />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

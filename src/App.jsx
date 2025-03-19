import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";



import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing"
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
           <Route path="/" element={<Landing />} />
           <Route path="/SignIn" element={<SignIn />} />
           <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`app-wrapper ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/portfolio" element={<Portfolio darkMode={darkMode} />} />
         
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>

        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
};

export default App;
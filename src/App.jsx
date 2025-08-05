import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Only available components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
// import Footer from "./components/Footer"; ❌ Not created yet

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />

        <Routes>
          {/* Only load created pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />

        </Routes>

        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;

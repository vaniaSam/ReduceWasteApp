// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from './Home';  // Import Home Page
import DonateFood from './DonateFood';  // Import Donate Food Page

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<DonateFood />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

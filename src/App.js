import React from "react";
// import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./peges/Home";
import { Reviews } from "./peges/ Reviews";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

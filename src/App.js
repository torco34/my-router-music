import React from "react";
// import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./peges/Home";
import { Reviews } from "./peges/Reviews";
import { Reissues } from "./peges/Reissues";
import { Interviews } from "./peges/Interviews";
import { Podcast } from "./peges/Podcast";
import { Contact } from "./peges/Contact";
// import { Layout } from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/Reissues" element={<Reissues />}></Route>
        <Route path="/Interviews" element={<Interviews />}></Route>
        <Route path="/Podcast" element={<Podcast />}></Route>/
        <Route path="/Contact" element={<Contact />}></Route>/
      </Routes>
    </Router>
  );
}

export default App;

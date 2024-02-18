import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import { Desserte } from "./desserte";
import { Home } from "./home";
import { Crysos } from "./crysos";
import { Res } from "./res";
import { Toon } from "./toon";
import { Thjerrza } from "./thjerrza";

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crysos" element={<Crysos />} />
          <Route path="/desserte" element={<Desserte />} />
          <Route path="/res" element={<Res />} />
          <Route path="/toon" element={<Toon />} />
          <Route path="/thjerrza" element={<Thjerrza />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;

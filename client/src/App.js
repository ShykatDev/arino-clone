import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Cursor /> */}
        <Navbar />
        <Routes>
          <Route path="/" element />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

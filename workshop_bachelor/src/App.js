import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/loader";
import Homepage from "./components/homepage";
import Team from "./components/team";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import "./index.css";
import "leaflet/dist/leaflet.css";
import MainPage from "./components/mainpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './components/loader';
import Homepage from './components/homepage';
import Team from './components/team';
import Sidebar from './components/sidebar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
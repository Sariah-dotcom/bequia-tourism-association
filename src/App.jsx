import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home.jsx';
import Travel from './pages/Travel.jsx';
import Accommodation from './pages/Accommodation.jsx';


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/accommodations" element={<Accommodation />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </Router>
  )
}

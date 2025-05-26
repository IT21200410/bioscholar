import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/About';
// import Features from './components/Features';
// import Documents from './components/Documents';
// import Presentations from './components/Presentations';
// import Milestones from './components/Milestones';
// import Domain from './components/Domain';
// import Achievements from './components/Achievements';
// import Team from './components/Team';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>  
        <Route path="/" element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;

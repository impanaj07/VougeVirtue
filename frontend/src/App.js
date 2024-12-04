import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Recommendation from './pages/Recommendation';
import Profile from './pages/Profile';
import Inspiration from './pages/Inspiration';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/recommendation" element={<Recommendation />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/inspiration" element={<Inspiration />} />
      </Routes>
    </Router>
  );
};

export default App;

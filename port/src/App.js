
import React from 'react';

import Navbar from './comps/nav/navbar';
import Home from './comps/home/Home';
import Timeline from './comps/timeline/timeline';
import Social from './comps/social/social';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <>
        <Navbar />

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/connect" element={<Social />} />
            
          </Routes>
        </main>
      </>
    </Router>
  );
}

export default App;

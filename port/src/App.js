
import React from 'react';
import Navbar from './comps/nav/navbar';
import Home from './comps/home/Home';
import Timeline from './comps/timeline/timeline';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// function App() {
//   return (
//     <>
//       <Navbar />

//       <main className="main">
//         <Home />
        
//       </main>

//       <Timeline />
//     </>
//   )
// }

function App() {
  return (
    <Router>
      <>
        <Navbar />

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            {/* Add more routes for other pages */}
          </Routes>
        </main>
      </>
    </Router>
  );
}

export default App;

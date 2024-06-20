import React, { useState, useEffect } from 'react';

import Navbar from './comps/nav/navbar';
import Home from './comps/home/Home';
import Timeline from './comps/timeline/timeline';
import Social from './comps/social/social';

function App() {
  // State to hold current path
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Update currentPath when URL changes
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen to changes in URL
    window.addEventListener('popstate', handleLocationChange);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Function to render component based on current path
  const renderComponent = () => {
    switch (currentPath) {
      case '/':
        return <Home />;
      case '/timeline':
        return <Timeline />;
      case '/connect':
        return <Social />;
      default:
        return <Home />; // Render Home component for unknown paths
    }
  };

  return (
    <>
      <Navbar />
      <main className="main">
        {renderComponent()}
      </main>
    </>
  );
}

export default App;

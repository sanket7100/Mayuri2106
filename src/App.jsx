import React, { useState, useEffect } from 'react';
import './App.css';
import LeftPanel from './Components/LeftPanel';
import RightPanel from './Components/RightPanel';
import RightPanelModified from './Components/RightPanelModified';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // State to track screen width
  const [isMobile, setIsMobile] = useState(false);

  // Function to handle resizing of the window
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600); // Update isMobile state based on window width
  };

  // Effect to add event listener for window resize
  useEffect(() => {
    handleResize(); // Call handleResize on initial render
    window.addEventListener('resize', handleResize); // Add event listener for window resize
    return () => window.removeEventListener('resize', handleResize); // Cleanup on component unmount
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          {isMobile ? (
            <>
            <Route path="/" element={<LeftPanel />} />
            <Route path="/rightpanelmodified/:groupName/:groupColor" element={<RightPanelModified />} /></>
          ) : (
            <Route path="/" element={<>
              <LeftPanel />
              <RightPanel />
            </>} />
          )}
          <Route path="/rightpanelmodified/:groupName/:groupColor" element={<>
            <LeftPanel />
            <RightPanelModified />
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

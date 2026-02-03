import React from 'react';
import Library from '../library/library';
import Player from '../player/player';
import SideBar from '../../components/sideBar/sideBar';

import Login from '../../auth/login';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './home.css';

// Component inside Router where useLocation can be used safely
function MainContent() {
  const location = useLocation();

  const hideSidebar = location.pathname === '/' || location.pathname === '/';

  
  return (
    < div className="main-body">
      {!hideSidebar && <SideBar />} {/* Hide sidebar on login/logout */}

        <Routes>
        <Route path="/library" element={<Library />} />
          <Route path="/player" element={<Player isFullPage={true} />} />
          <Route path="/" element={<Login />} />
          
        </Routes>
    
    </div>
  );
}

function Home() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default Home;

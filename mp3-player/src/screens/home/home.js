import React from 'react'
import Library from '../library/library';
import Feed from '../feed/feed';
import Trending from '../trending/trending';
import Player from '../player/player';
import SideBar from '../../components/sideBar/sideBar';
import Favourites from '../favourites/favourites';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './home.css';

function Home() {
  return (
      <Router>
         <div className='main-body'> 
          <SideBar/>
          <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>    
        </div>
      </Router>
   
  )
}

export default Home
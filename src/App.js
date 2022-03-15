import './App.css';
import React from "react";
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Messenger from './components/Messenger/Messenger';
import Friends from './components/Friends/Friends';
import Communities from './components/Communities/Communities';
import Photos from './components/Photos/Photos';
import Music from './components/Music/Music';
import Videos from './components/Videos/Videos';
import Settings from './components/Settings/Settings';








const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Navbar />
        <div className="add-wrapper-app">
          <Routes>
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/news" exact element={<News />} />
            <Route path="/messenger" exact element={<Messenger />} />
            <Route path="/friends" exact element={<Friends />} />
            <Route path="/communities" exact element={<Communities />} />
            <Route path="/photos" exact element={<Photos />} />
            <Route path="/music" exact element={<Music />} />
            <Route path="/videos" exact element={<Videos />} />
            <Route path="/settings" exact element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;

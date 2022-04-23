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




const App = (props) => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Navbar />
        <div className="add-wrapper-app">
          <Routes>
            <Route path="/profile" element={<Profile state={props.state.profile} />} />
            <Route path="/news" element={<News state={props.state.news} />} />
            <Route path="/messenger" element={<Messenger state={props.state.messenger} />} />
            <Route path="/friends" element={<Friends state={props.state.friends} />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/music" element={<Music />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;

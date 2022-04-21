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
            <Route path="/profile" element={<Profile postsData={props.postsData} />} />
            <Route path="/news" element={<News />} />
            <Route path="/messenger" element={<Messenger dialogNameData={props.dialogNameData} dialogMessageData={props.dialogMessageData} />} />
            <Route path="/friends" element={<Friends friendsData={props.friendsData} friendsTabsData={props.friendsTabsData} />} />
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

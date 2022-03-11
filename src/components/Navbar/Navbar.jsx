import style from "./Navbar.module.css";
import React from "react";
import { NavLink } from "react-router-dom";



const Navbar = () => {
       return (
              <div className={style.navbar}>

                     <div className={style.item}>
                            <NavLink className={style.link} to="/profile">
                                   <img className={style.img} src="./icons/profile.svg" />My profile
                            </NavLink>
                     </div>

                     <div className={style.item}>
                            <NavLink className={style.link} to="/news">
                                   <img className={style.img} src="./icons/news.svg" />News
                            </NavLink>
                     </div>

                     <div className={style.item}>
                            <NavLink className={style.link} to="/messenger">
                                   <img className={style.img} src="./icons/messenger.svg" />Messenger
                            </NavLink>
                     </div>

                     <div className={style.item}>
                            <NavLink className={style.link} to="/friends">
                                   <img className={style.img} src="./icons/friends.svg" />Friends
                            </NavLink>
                     </div>

                     <div className={style.item}>
                            <NavLink className={style.link} to="/communities">
                                   <img className={style.img} src="./icons/communities.svg" />Communities
                            </NavLink>
                     </div>

                     <div className={style.item}>
                            <NavLink className={style.link} to="/photos">
                                   <img className={style.img} src="./icons/photos.svg" />Photos
                            </NavLink>
                     </div>

                     <div className={style.item}>
                            <NavLink className={style.link} to="/music">
                                   <img className={style.img} src="./icons/music.svg" />Music
                            </NavLink>
                     </div>

                     <div className={style.item}>
                            <NavLink className={style.link} to="/videos">
                                   <img className={style.img} src="./icons/videos.svg" />Videos
                            </NavLink>
                     </div>

                     <div className={style.item}>
                            <NavLink className={style.link} to="/settings">
                                   <img className={style.img} src="./icons/settings.svg" />Settings
                            </NavLink>
                     </div>


              </div>
       );
}

export default Navbar;
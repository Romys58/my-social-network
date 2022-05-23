import style from "./Navbar.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = () => {
       return (
              <div className={style.navbar}>
                     <div className={style.item}>
                            <NavLink className={style.link} to="/profile">
                                   <FontAwesomeIcon className={style.icon} icon="fa-regular fa-circle-user" />
                                   Profile
                            </NavLink>
                     </div>
                     <div className={style.item}>
                            <NavLink className={style.link} to="/news">
                                   <FontAwesomeIcon className={style.icon} icon="fa-regular fa-newspaper" />
                                   News
                            </NavLink>
                     </div>
                     <div className={style.item}>
                            <NavLink className={style.link} to="/messenger">
                                   <FontAwesomeIcon className={style.icon} icon="fa-regular fa-comment" />
                                   Messenger
                            </NavLink>
                     </div>
                     <div className={style.item}>
                            <NavLink className={style.link} to="/friends">
                                   <FontAwesomeIcon className={style.icon} icon="fa-solid fa-user-group" />
                                   Friends
                            </NavLink>
                     </div>
                     <div className={style.item}>
                            <NavLink className={style.link} to="/communities">
                                   <FontAwesomeIcon className={style.icon} icon="fa-solid fa-people-group" />
                                   Communities
                            </NavLink>
                     </div>
                     <div className={style.item}>
                            <NavLink className={style.link} to="/photo">
                                   <FontAwesomeIcon className={style.icon} icon="fa-regular fa-image" />
                                   Photo
                            </NavLink>
                     </div>
                     <div className={style.item}>
                            <NavLink className={style.link} to="/music">
                                   <FontAwesomeIcon className={style.icon} icon="fa-solid fa-music" />
                                   Music
                            </NavLink>
                     </div>
                     <div className={style.item}>
                            <NavLink className={style.link} to="/videos">
                                   <FontAwesomeIcon className={style.icon} icon="fa-solid fa-video" />
                                   Videos
                            </NavLink>
                     </div>
                     <div className={style.item}>
                            <NavLink className={style.link} to="/settings">
                                   <FontAwesomeIcon className={style.icon} icon="fa-solid fa-gears" />
                                   Settings
                            </NavLink>
                     </div>
              </div>
       );
}


export default Navbar;
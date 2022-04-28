import style from "./Navbar.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = () => {
       return (
              <div className={style.navbar}>
                     <div className={style.item}>
                            <NavLink className={style.link} to="/profile">
                                   <FontAwesomeIcon className={style.icon} icon="fa-regular fa-circle-user" transform="left-7" size="xl" />
                                   Profile
                            </NavLink>
                     </div>
                     <div className={style.item}>
                            <NavLink className={style.link} to="/news">
                                   <FontAwesomeIcon className={style.icon} icon="fa-regular fa-newspaper" transform="left-7" size="xl" />
                                   News
                            </NavLink>
                     </div>
                     <div className={style.item}>
                            <NavLink className={style.link} to="/messenger">
                                   <FontAwesomeIcon className={style.icon} icon="fa-regular fa-comment" transform="left-7" size="xl" />
                                   Messenger
                            </NavLink>
                     </div>
                     <div className={style.item}>
                            <NavLink className={style.link} to="/friends">
                                   <FontAwesomeIcon className={style.icon} icon="fa-solid fa-user-group" transform="left-7" size="xl" />
                                   Friends
                            </NavLink>
                     </div>
                     <div className={style.item}>
                            <NavLink className={style.link} to="/communities">
                                   <FontAwesomeIcon className={style.icon} icon="fa-solid fa-people-group" transform="left-7" size="xl" />
                                   Communities
                            </NavLink>
                     </div>
                     <div className={style.item}>
                            <NavLink className={style.link} to="/photo">
                                   <FontAwesomeIcon className={style.icon} icon="fa-regular fa-image" transform="left-7" size="xl" />
                                   Photo
                            </NavLink>
                     </div>
                     <div className={style.item}>
                            <NavLink className={style.link} to="/music">
                                   <FontAwesomeIcon className={style.icon} icon="fa-solid fa-music" transform="left-7" size="xl" />
                                   Music
                            </NavLink>
                     </div>
                     <div className={style.item}>
                            <NavLink className={style.link} to="/videos">
                                   <FontAwesomeIcon className={style.icon} icon="fa-solid fa-video" transform="left-7" size="xl" />
                                   Videos
                            </NavLink>
                     </div>
                     <div className={style.item}>
                            <NavLink className={style.link} to="/settings">
                                   <FontAwesomeIcon className={style.icon} icon="fa-solid fa-gears" transform="left-7" size="xl" />
                                   Settings
                            </NavLink>
                     </div>
              </div>
       );
}


export default Navbar;
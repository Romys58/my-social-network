import style from "./Navbar.module.css";
import React from "react";
import {NavLink} from "react-router-dom";



const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.item}>
                   <NavLink to="/profile">My profile</NavLink>
            </div>
            <div className={style.item}>
                   <NavLink to="/news">News</NavLink>
            </div>
            <div className={style.item}>
                   <NavLink to="/messenger">Messenger</NavLink>
            </div>
            <div className={style.item}>
                   <NavLink to="/friends">Friends</NavLink>
            </div>
            <div className={style.item}>
                   <NavLink to="/communities">Communities</NavLink>
            </div>
            <div className={style.item}>
                   <NavLink to="/photos">Photos</NavLink>
            </div>
            <div className={style.item}>
                   <NavLink to="/music">Music</NavLink>
            </div>
            <div className={style.item}>
                   <NavLink to="/videos">Videos</NavLink>
            </div>
            <div className={style.item}>
                   <NavLink to="/settings">Settings</NavLink>
            </div>
            
               
                
        </div>
    );
}

export default Navbar;
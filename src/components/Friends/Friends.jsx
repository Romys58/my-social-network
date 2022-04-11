import style from "./Friends.module.css";
import React from "react";
import FriendsHeader from "./FriendsHeader/FriendsHeader";

const Friends = () => {
    return (
        <div className={style.friends}>
            <FriendsHeader />
            <input className={style.friends__search} placeholder="Search friends" />
            
            
            {/* КОНТЕНТ */}
            <div className={style.friends__list}>
            </div>
        </div>


    )
}

export default Friends;
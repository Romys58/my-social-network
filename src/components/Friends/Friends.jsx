import style from "./Friends.module.css";
import React from "react";
import FriendsHeader from "./FriendsHeader/FriendsHeader";
import FriendsList from "./FriendsList/FriendsList";

const Friends = () => {
    return (
        <div className={style.friends}>
            <FriendsHeader />
            <input className={style.friends__search} placeholder="Search friends" />
            <FriendsList />
        </div>


    )
}

export default Friends;
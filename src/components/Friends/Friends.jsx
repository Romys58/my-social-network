import style from "./Friends.module.css";
import React from "react";
import FriendsHeader from "./FriendsHeader/FriendsHeader";
import FriendsList from "./FriendsList/FriendsList";



function Friends(props) {
    return (
        <div className={style.friends}>
            <FriendsHeader friendsTabsData={props.friendsTabsData} />
            <input className={style.friends__search} placeholder="Search friends" />
            <FriendsList friendsData={props.friendsData} />
        </div>


    );
}

export default Friends;
import style from "./Friends.module.css";
import React from "react";
import FriendsHeader from "./FriendsHeader/FriendsHeader";
import FriendsList from "./FriendsList/FriendsList";



function Friends(props) {
    return (
        <div className={style.friends}>
            <FriendsHeader state={props.state.tabsData} />
            <input className={style.friends__search} placeholder="Search friends" />
            <FriendsList state={props.state.friendsUserRowData} />
        </div>


    );
}

export default Friends;
import style from "./Profile.module.css";
import React from "react";
import Avatar from "./Avatar/Avatar";
import InfoPage from "./InfoPage/InfoPage";
import PagePhoto from "./PagePhoto/PagePhoto";
import Gifts from "./Gifts/Gifts";
import MyPosts from "./MyPosts/MyPosts";
import PageFriends from "./PageFriends/PageFriends";



const Profile = (props) => {
    return (
        <div className={style.profile}>
            <Avatar />
            <InfoPage state={props.state.countsData} />
            <PagePhoto />
            <Gifts />
            <PageFriends />
            <MyPosts state={props.state.postsData} />
        </div>
    );
}

export default Profile;
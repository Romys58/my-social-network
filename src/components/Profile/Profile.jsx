import style from "./Profile.module.css";
import React from "react";
import Avatar from "./Avatar/Avatar";
import InfoPage from "./InfoPage/InfoPage";
import PagePhoto from "./PagePhoto/PagePhoto";
import Gifts from "./Gifts/Gifts";
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={style.profile}>
            <Avatar />
            <InfoPage />
            <PagePhoto />
            <Gifts />
            <MyPosts />
        </div>
    );
}

export default Profile;
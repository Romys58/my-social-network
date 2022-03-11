import style from "./Profile.module.css";
import React from "react";
import Avatar from "./Avatar/Avatar";

const Profile = () => {
    return (
        <div className={style.profile}>
            <Avatar />

            <div className={style.info_page}>
                <div className={style.description}>
                    <h1>Roman Filippov</h1>
                    <h4>set status</h4>
                </div>
            </div>
        </div>
    );
}

export default Profile;
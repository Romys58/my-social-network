import React from "react";
import style from "./PageFriends.module.css";


const PageFriends = () => {
    return(
        <div className={style.friends}>
                friends
                <img className={style.img} src="./icons/camera.png" />
            </div>
    );
}

export default PageFriends;
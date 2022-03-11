import React from "react";
import style from "./Avatar.module.css";
import AvatarMenu from "./AvatarMenu/AvatarMenu";


const Avatar = () => {
    return(
        <div className={style.avatar}>
                <img className={style.img} src="./icons/camera.png" />
                <button className={style.avatar_button}>Edit</button>
                <AvatarMenu />
                
            </div>
    );
}


export default Avatar;
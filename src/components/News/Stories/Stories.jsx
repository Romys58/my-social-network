import React from "react";
import style from "./Stories.module.css";


const Stories = () => {
    return(
        <div className={style.stories}>
                <h3 className={style.h3}>Stories</h3>
                <div className={style.add_stories}>
                    <img className={style.img} src="./icons/camera.png" />
                    <img className={style.img} src="./icons/camera.png" />
                    <img className={style.img} src="./icons/camera.png" />
                </div>
            </div>
    );
}

export default Stories;
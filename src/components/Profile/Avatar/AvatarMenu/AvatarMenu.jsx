import React from "react";
import style from "./AvatarMenu.module.css";


const AvatarMenu = () => {
    return(
        <div className={style.avatar_menu}>

                    <div className={style.item}>
                        <a className={style.link} href="#">
                            <img className={style.img} src="./icons/statistics.svg"/>Statistics
                        </a>
                    </div>

                    <div className={style.item}>
                        <a className={style.link} href="#">
                            <img className={style.img} src="./icons/memories.svg"/>Memories
                        </a>
                    </div>

                    <div className={style.item}>
                        <a className={style.link} href="#">
                            <img className={style.img} src="./icons/story_archive.svg"/>Story archive
                        </a>
                    </div>
                </div>
    );
}


export default AvatarMenu;
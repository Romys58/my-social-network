import React from "react";
import style from "./AvatarMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AvatarMenu = () => {
    return (
        <div className={style.avatar_menu}>

            <div className={style.item}>
                <a className={style.link} href="#">
                <FontAwesomeIcon icon="fa-solid fa-chart-pie" transform="left-5" />Statistics
                </a>
            </div>

            <div className={style.item}>
                <a className={style.link} href="#">
                    <FontAwesomeIcon icon="fa-solid fa-clock-rotate-left" transform="left-5" />Memories
                </a>
            </div>

            <div className={style.item}>
                <a className={style.link} href="#">
                    <FontAwesomeIcon icon="fa-solid fa-box-archive" transform="left-5" />Story archive
                </a>
            </div>
        </div>
    );
}


export default AvatarMenu;
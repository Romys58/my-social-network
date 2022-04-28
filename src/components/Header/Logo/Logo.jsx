import React from "react";
import style from "./Logo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Logo = () => {
    return(
        <div className={style.logo}>
                <FontAwesomeIcon icon="fa-solid fa-hashtag" size="3x" transform="up-14" />
            </div>
    );
}

export default Logo;
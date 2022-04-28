import React from "react";
import style from "./Notify.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Notify = () => {
    return(
        <div className={style.notify}>
                <FontAwesomeIcon className={style.bell} icon="fa-regular fa-bell" size="xl" transform="down-9 right-11"/>   
        </div>
    );
}

export default Notify;
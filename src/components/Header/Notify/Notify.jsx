import React from "react";
import style from "./Notify.module.css";


const Notify = () => {
    return(
        <div className={style.notify}>
                <img className={style.img} src="./icons/bell.svg"/>    
        </div>
    );
}

export default Notify;
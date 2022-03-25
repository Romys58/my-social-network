import React from "react";
import style from "./Dialogs.module.css";


const Dialogs = (props) => {
    return (

        <div className={style.item}>
            {props.message}
        </div>


    );
}

export default Dialogs;
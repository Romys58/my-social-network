import React from "react";
import style from "./DialogContent.module.css";


const DialogContent = (props) => {
    return (
        <div className={style.dialog_content}>
            <div className={style.item}>
                {props.message}
            </div>
        </div>
    );
}

export default DialogContent;
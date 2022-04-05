import React from "react";
import style from "./DialogContent.module.css";


const DialogContent = () => {
    return (
        <div className={style.dialog_content}>
            <div className={style.item}>
                Hi, aren't you studying react right now?
            </div>
            <div className={style.item}>
                Do you know how to do it?
            </div>
            <div className={style.item}>
                At 14:00 after lunch we will meet on the spot
            </div>
            <div className={style.item}>
                What time will you be home today?
            </div>
            <div className={style.item}>
                I think we should move on
            </div>
            <div className={style.item}>
                the typescript is not that complicated
            </div>
            <div className={style.item}>
                look at my project on github
            </div>
            <div className={style.item}>
                Yes, I will go there
            </div>
        </div>
    );
}

export default DialogContent;
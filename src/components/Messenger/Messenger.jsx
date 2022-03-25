import style from "./Messenger.module.css";
import React from "react";
import Dialogs from "./Dialogs/Dialogs";

const Messenger = () => {
    return (
        <div className={style.messenger}>
            <input className={style.input} placeholder="Search" type="text"></input>
            <div className={style.dialogs}>
                <Dialogs message="Hi, i am learning the way of samurai, and you?" />
                <Dialogs message="Ohh, and TypeScript" />
                <Dialogs message="TypeScript is very complex" />
                <Dialogs message="Yes, i do" />
            </div>


        </div>
    );
}

export default Messenger;
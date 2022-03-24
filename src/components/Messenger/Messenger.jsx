import style from "./Messenger.module.css";
import React from "react";

const Messenger = () => {
    return(
        <div className={style.messenger}>
               <input className={style.input} placeholder="Search" type="text"></input>
               <div className={style.dialogs}>
                   <div className={style.dialog}>
                       Hi, i am Roman.
                   </div>
               </div>
        </div>
    );
}

export default Messenger;
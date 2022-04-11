import React from "react";
import style from "./FriendsHeader.module.css";
import Tabs from "./Tabs/Tabs";


const FriendsHeader = () => {
    return(
        <div className={style.friends__header}>
                <Tabs counter="36" id="1" text="All friends" />
                <Tabs counter="6" id="2" text="Friends online" />
                <button className={style.friends__button}>Find friends</button>
            </div >
    );
}

export default FriendsHeader;
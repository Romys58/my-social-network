import React from "react";
import style from "./FriendsHeader.module.css";
import Tabs from "./Tabs/Tabs";

// счетчик на вкладке friends {All Friends and Online friends} //
const tabsData = [
    {id: "1", counter: "36", text: "All friends"},
    {id: "2", counter: "6", text: "Friends online"}
]


const FriendsHeader = () => {
    return(
        <div className={style.friends__header}>
                <Tabs id={tabsData [0].id} counter={tabsData [0].counter} text={tabsData [0].text} />
                <Tabs id={tabsData [1].id} counter={tabsData [1].counter} text={tabsData [1].text} />
                <button className={style.friends__button}>Find friends</button>
            </div >
    );
}

export default FriendsHeader;
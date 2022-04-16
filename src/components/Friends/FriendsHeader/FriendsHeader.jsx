import React from "react";
import style from "./FriendsHeader.module.css";
import Tabs from "./Tabs/Tabs";


// счетчик на вкладке friends {All Friends and Online friends} //
const tabsData = [
    {id: "1", counter: "36", text: "All friends"},
    {id: "2", counter: "6", text: "Friends online"}
]

const newTabsData = tabsData
.map( tabsElement => <Tabs id={tabsElement.id} counter={tabsElement.counter} text={tabsElement.text} /> )

const FriendsHeader = () => {
    return(
        <div className={style.friends__header}>
                {newTabsData}
                <button className={style.friends__button}>Find friends</button>
            </div >
    );
}

export default FriendsHeader;
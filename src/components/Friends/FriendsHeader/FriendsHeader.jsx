import React from "react";
import style from "./FriendsHeader.module.css";
import Tabs from "./Tabs/Tabs";




const FriendsHeader = (props) => {
    const newTabsData =
        props.state.map(tabsElement => <Tabs id={tabsElement.id} counter={tabsElement.counter} text={tabsElement.text} />)

    return (
        <div className={style.friends__header}>
            {newTabsData}
            <button className={style.friends__button}>Find friends</button>
        </div >
    );
}

export default FriendsHeader;
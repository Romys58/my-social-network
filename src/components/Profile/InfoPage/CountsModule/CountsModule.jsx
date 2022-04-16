import React from "react";
import style from "./CountsModule.module.css";
import CountsItem from "./CountsItem/CountsItem";

const countsData = [
    { id: "1", text: "followers" },
    { id: "2", text: "friends" },
    { id: "3", text: "photo" },
    { id: "4", text: "music" }
]

const newCountsData = countsData
    .map(countElement => <CountsItem id={countElement.id} text={countElement.text} />)


const CountsModule = () => {
    return (
        <div className={style.counts_module}>
            <ul className={style.ul}>
                {newCountsData}
            </ul>
        </div>
    );
}

export default CountsModule;
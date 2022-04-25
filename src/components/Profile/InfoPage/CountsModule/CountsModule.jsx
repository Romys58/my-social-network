import React from "react";
import style from "./CountsModule.module.css";
import CountsItem from "./CountsItem/CountsItem";



const CountsModule = (props) => {
    const newCountsData =
        props.state.map(countElement => <CountsItem id={countElement.id} text={countElement.text} counter={countElement.counter} />)
    return (
        <div className={style.counts_module}>
            <ul className={style.ul}>
                {newCountsData}
            </ul>
        </div>
    );
}

export default CountsModule;
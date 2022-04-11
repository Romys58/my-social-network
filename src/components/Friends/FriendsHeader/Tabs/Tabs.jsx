import React from "react";
import style from "./Tabs.module.css";
import { NavLink } from "react-router-dom";


const Tabs = (props) => {
    return(
        <div className={style.tab}>
                    <NavLink className={style.link} to={props.id}>{props.text}</NavLink>
                    <span className={style.counter}>{props.counter}</span>
                </div>
    );
}

export default Tabs;
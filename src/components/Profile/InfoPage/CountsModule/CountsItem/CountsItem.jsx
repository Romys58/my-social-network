import React from "react";
import style from "./CountsItem.module.css";
import { NavLink } from "react-router-dom";


const CountsItem = (props) => {
    return (
        <div className={style.li}>
            <NavLink className={style.link} to={props.id}>
                {props.text}<div className={style.counter}>{props.counter}</div>
            </NavLink>
        </div>

    );
}


export default CountsItem;
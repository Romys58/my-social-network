import React from "react";
import style from "./CountsItem.module.css";
import { NavLink } from "react-router-dom";


const CountsItem = (props) => {
    return (
        <li className={style.li}>
            <NavLink className={style.link} to={props.id}>{props.text}</NavLink>
        </li>
    );
}


export default CountsItem;
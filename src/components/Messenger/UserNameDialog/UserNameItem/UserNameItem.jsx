import React from "react";
import style from "./UserNameItem.module.css";
import { NavLink } from "react-router-dom";


const UserNameItem = (props) => {
    return(
        <div className={style.item}>
            <NavLink className={style.link} to={props.id}>{props.name}</NavLink>
        </div>
    );
}

export default UserNameItem;
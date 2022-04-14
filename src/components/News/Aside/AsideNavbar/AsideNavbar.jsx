import React from "react";
import style from "./AsideNavbar.module.css";
import { NavLink } from "react-router-dom";


const AsideNavbar = (props) => {
    return(
            <div className={style.item}>
                    <NavLink to={props.id} className={style.link}>{props.text}</NavLink>
                </div>
    );
}

export default AsideNavbar;
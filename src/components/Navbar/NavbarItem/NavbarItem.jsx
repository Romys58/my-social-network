import React from "react";
import style from "./NavbarItem.module.css";
import { NavLink, Link } from "react-router-dom";

const NavbarItem = (props) => {
    return (
        <div className={style.item}>
            <NavLink className={style.link} to={props.path}>
                <img className={style.img} src={props.img} />{props.text}
            </NavLink>
        </div>
    );
}

export default NavbarItem;
import React from "react";
import style from "./UserNameDialog.module.css";
import { NavLink } from "react-router-dom";


const UserNameDialog = () => {
    return(
        <div className={style.user_name_dialog}>
                        <div className={style.item}>
                            <NavLink className={style.link} to="1">Dmitry</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} to="1">Sveta</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} to="1">Andrey</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} to="1">Kirill</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} to="1">Evgeniy</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} to="1">Anton</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} to="1">Kostya</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} to="1">Olya</NavLink>
                        </div>
                    </div>
    );
}

export default UserNameDialog;
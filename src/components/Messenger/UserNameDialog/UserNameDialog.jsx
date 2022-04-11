import React from "react";
import style from "./UserNameDialog.module.css";
import { NavLink } from "react-router-dom";


const UserNameDialog = () => {
    return(
        <div className={style.user_name_dialog}>
                        <div className={style.item}>
                            <NavLink className={style.link} to="/1">Dmitry</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} to="/2">Sveta</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} to="/3">Andrey</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} to="/4">Kirill</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} to="/5">Evgeniy</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} to="/6">Anton</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} to="/7">Kostya</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} to="/8">Olya</NavLink>
                        </div>
                    </div>
    );
}

export default UserNameDialog;
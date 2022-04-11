import React from "react";
import style from "./UserNameDialog.module.css";
import UserNameItem from "./UserNameItem/UserNameItem";


const UserNameDialog = () => {
    return(
        <div className={style.user_name_dialog}>
                        <UserNameItem name="Evgenia" id="1"/>
                        <UserNameItem name="Sveta" id="2"/>
                        <UserNameItem name="Andrey" id="3"/>
                        <UserNameItem name="Kirill" id="4"/>
                        <UserNameItem name="Dmitry" id="5"/>
                        <UserNameItem name="Anton" id="6"/>
                        <UserNameItem name="Kostya" id="7"/>
                        <UserNameItem name="Olya" id="8"/>
                    </div>
    );
}

export default UserNameDialog;
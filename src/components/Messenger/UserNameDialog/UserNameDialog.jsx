import React from "react";
import style from "./UserNameDialog.module.css";
import UserNameItem from "./UserNameItem/UserNameItem";


const userNameData = [
    { name: "Evgenia", id: "1" },
    { name: "Sveta", id: "2" },
    { name: "Andrey", id: "3" },
    { name: "Kirill", id: "4" },
    { name: "Dmitriy", id: "5" },
    { name: "Anton", id: "6" },
    { name: "Kostya", id: "7" },
    { name: "Olya", id: "8" }
]

const newUserNameData = userNameData.map( userElement => <UserNameItem name={userElement.name} id={userElement.id}/> )

const UserNameDialog = () => {
    return (
        <div className={style.user_name_dialog}>
            { newUserNameData }
        </div>
    );
}

export default UserNameDialog;

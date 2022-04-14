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

const userNameElements = [
                        <UserNameItem name={userNameData [0].name} id={userNameData [0].id}/>,
                        <UserNameItem name={userNameData [1].name} id={userNameData [1].id}/>,
                        <UserNameItem name={userNameData [2].name} id={userNameData [2].id}/>,
                        <UserNameItem name={userNameData [3].name} id={userNameData [3].id}/>,
                        <UserNameItem name={userNameData [4].name} id={userNameData [4].id}/>,
                        <UserNameItem name={userNameData [5].name} id={userNameData [5].id}/>,
                        <UserNameItem name={userNameData [6].name} id={userNameData [6].id}/>,
                        <UserNameItem name={userNameData [7].name} id={userNameData [7].id}/>
]


const UserNameDialog = () => {
    return (
        <div className={style.user_name_dialog}>



            { userNameElements }




            {/* <UserNameItem name={userNameData [0].name} id={userNameData [0].id} />
                        <UserNameItem name={userNameData [1].name} id={userNameData [1].id}/>
                        <UserNameItem name={userNameData [2].name} id={userNameData [2].id}/>
                        <UserNameItem name={userNameData [3].name} id={userNameData [3].id}/>
                        <UserNameItem name={userNameData [4].name} id={userNameData [4].id}/>
                        <UserNameItem name={userNameData [5].name} id={userNameData [5].id}/>
                        <UserNameItem name={userNameData [6].name} id={userNameData [6].id}/>
                        <UserNameItem name={userNameData [7].name} id={userNameData [7].id}/> */}
        </div>
    );
}

export default UserNameDialog;

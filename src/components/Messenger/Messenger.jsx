import style from "./Messenger.module.css";
import React from "react";
import DialogContent from "./DialogContent/DialogContent";
import UserNameItem from "./UserNameItem/UserNameItem";

const nameData = [
    { name: "Evgenia", id: "1" },
    { name: "Sveta", id: "2" },
    { name: "Andrey", id: "3" },
    { name: "Kirill", id: "4" },
    { name: "Dmitriy", id: "5" },
    { name: "Anton", id: "6" },
    { name: "Kostya", id: "7" },
    { name: "Olya", id: "8" }
];
const messageData = [
    { message: "Hi, aren't you studying react right now?" },
    { message: "Do you know how to do it?" },
    { message: "At 14:00 after lunch we will meet on the spot" },
    { message: "What time will you be home today?" },
    { message: "I think we should move on" },
    { message: "the typescript is not that complicated" },
    { message: "look at my project on github" },
    { message: "Yes, I will go there" }
]

const newUserName = nameData
    .map(userName => <UserNameItem name={userName.name} id={userName.id} />)

const newMessage = messageData
    .map(dialogElement => <DialogContent message={dialogElement.message} />)


const Messenger = () => {
    return (
        <div className={style.messenger}>

            <input className={style.input} placeholder="Search" type="text"></input>

            <div className={style.dialog_window}>
                <div className={style.user_name_dialog}>
                    {newUserName}
                </div>
                {newMessage}
            </div>

        </div>
    );
}

export default Messenger;
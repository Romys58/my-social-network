import style from "./Messenger.module.css";
import React from "react";
import UserNameDialog from "./UserNameDialog/UserNameDialog";
import DialogContent from "./DialogContent/DialogContent";


const dialogContentData = [
    {message: "Hi, aren't you studying react right now?"},
    {message: "Do you know how to do it?"},
    {message: "At 14:00 after lunch we will meet on the spot"},
    {message: "What time will you be home today?"},
    {message: "I think we should move on"},
    {message: "the typescript is not that complicated"},
    {message: "look at my project on github"},
    {message: "Yes, I will go there"},
]

const newDialogElement = dialogContentData.map( dialogContentElement => <DialogContent message={dialogContentElement.message}/>)


const Messenger = () => {
    return (
        <div className={style.messenger}>
            <input className={style.input} placeholder="Search" type="text"></input>

            <div className={style.dialog_window}>
                <UserNameDialog />
                {newDialogElement}
            </div>

        </div>
    );
}

export default Messenger;
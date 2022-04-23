import style from "./Messenger.module.css";
import React from "react";
import DialogContent from "./DialogContent/DialogContent";
import UserNameItem from "./UserNameItem/UserNameItem";



const Messenger = (props) => {

    const newUserName = props.state.nameData
        .map(userName => <UserNameItem name={userName.name} id={userName.id} />)

    const newMessage = props.state.messageData
        .map(dialogElement => <DialogContent message={dialogElement.message} />)

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
import style from "./Messenger.module.css";
import React from "react";
import UserNameDialog from "./UserNameDialog/UserNameDialog";
import DialogContent from "./DialogContent/DialogContent";


const Messenger = () => {
    return (
        <div className={style.messenger}>
            <input className={style.input} placeholder="Search" type="text"></input>

            <div className={style.dialog_window}>
                <UserNameDialog />
                <DialogContent />
            </div>

        </div>
    );
}

export default Messenger;
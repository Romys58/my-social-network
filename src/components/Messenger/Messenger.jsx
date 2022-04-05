import style from "./Messenger.module.css";
import React from "react";
import UserNameDialog from "./UserNameDialog/UserNameDialog";


const Messenger = () => {
    return (
        <div className={style.messenger}>
            <input className={style.input} placeholder="Search" type="text"></input>

            <div className={style.dialog_window}>
                    <UserNameDialog />

                    <div className={style.dialog_content}>
                        <div className={style.item}>
                            Hi, aren't you studying react right now?
                        </div>
                        <div className={style.item}>
                            Hi, aren't you studying react right now?
                        </div>
                        <div className={style.item}>
                            Hi, aren't you studying react right now?
                        </div>
                        <div className={style.item}>
                            Hi, aren't you studying react right now?
                        </div>
                        <div className={style.item}>
                            Hi, aren't you studying react right now?
                        </div>
                        <div className={style.item}>
                            Hi, aren't you studying react right now?
                        </div>
                        <div className={style.item}>
                            Hi, aren't you studying react right now?
                        </div>
                        <div className={style.item}>
                            Hi, aren't you studying react right now?
                        </div>
                    </div>
            </div>

        </div>
    );
}

export default Messenger;
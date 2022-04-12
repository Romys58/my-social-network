import React from "react";
import style from "./FriendsUserRow.module.css";


const FriendsUserRow = (props) => {
    return(
        <div className={style.friends__user__row}>
                    <div className={style.friends__name}>
                        {props.name}
                    </div>
                    <div className={style.friends__info}>
                        {props.info}
                    </div>
                    <img className={style.friends__img} src="/icons/camera.png" />
                </div>
    );
}

export default FriendsUserRow;
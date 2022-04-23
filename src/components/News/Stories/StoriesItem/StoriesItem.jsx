import React from "react";
import style from "./StoriesItem.module.css";

const StoriesItem = (props) => {
    return (
        <div className={style.stories_item}>
            <h3 className={style.user_name}>{props.name}</h3>
            <img className={style.img} src={props.img} />
        </div>
    );
}

export default StoriesItem;
import React from "react";
import style from "./Posts.module.css";


const Posts = (props) => {
    return (
        <div className={style.posts}>
            <img className={style.img} src="./icons/camera.png" />
            <div className={style.post_message}>
                {props.message}
            </div>
            <div className={style.like_counter}>
                Like {props.like}
            </div>
        </div>


    );
}


export default Posts;
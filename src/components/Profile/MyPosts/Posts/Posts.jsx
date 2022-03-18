import React from "react";
import style from "./Posts.module.css";


const Posts = () => {
    return (
        <div className={style.posts_wrapper}>
            <div className={style.posts}>
                <div className={style.nickname}>
                    Andrei
                </div>
                <img className={style.img} src="./icons/post_camera.png" />
                    <p className={style.p}>Hello, here i am learning React way of the samurai</p>
            </div>
        </div>
    );
}


export default Posts;
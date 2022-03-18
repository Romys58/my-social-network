import React from "react";
import style from "./MyPosts.module.css";
import Posts from "./Posts/Posts";


const MyPosts = () => {
    return(
        <div className={style.my_posts}>
                <textarea placeholder="What's new?" className={style.area}></textarea>
                <button className={style.button}>Send</button>
                <Posts />
                <Posts />
                <Posts />
                <Posts />
            </div>
    );
}

export default MyPosts;
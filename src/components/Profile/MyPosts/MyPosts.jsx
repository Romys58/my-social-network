import React from "react";
import style from "./MyPosts.module.css";
import Posts from "./Posts/Posts";






const MyPosts = (props) => {

    const newPostsData =
        props.postsData.map(postsElement => <Posts message={postsElement.message} like={postsElement.like} />)

    return (
        <div className={style.my_posts}>
            <textarea placeholder="What's new?" className={style.area}></textarea>
            <button className={style.button}>Send</button>
            <div className={style.wrapper_posts}>

                {newPostsData}

            </div>
        </div>
    );
}

export default MyPosts;
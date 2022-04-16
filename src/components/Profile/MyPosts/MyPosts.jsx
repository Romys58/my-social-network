import React from "react";
import style from "./MyPosts.module.css";
import Posts from "./Posts/Posts";


const postsData = [
    {message: "It's my first post!", like: 15},
    {message: "Hey , it's me in the Network..", like: 23},
    {message: "This is social network really good!!!", like: 11},
    {message: "Who want's add me friends?", like: 13},
]

const newPostsData = postsData.map( postsElement => <Posts message={postsElement.message} like={postsElement.like} /> )


const MyPosts = () => {
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
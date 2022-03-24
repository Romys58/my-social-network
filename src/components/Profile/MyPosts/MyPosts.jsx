import React from "react";
import style from "./MyPosts.module.css";
import Posts from "./Posts/Posts";


const MyPosts = () => {
    return (
        <div className={style.my_posts}>
            <textarea placeholder="What's new?" className={style.area}></textarea>
            <button className={style.button}>Send</button>
            <div className={style.wrapper_posts}>
                <Posts name="Anastasia" message="It's my first post!" like="15" />
                <Posts name="Vasya" message="Hey , it's me in the Network.." like="23" />
                <Posts name="Andrei" message="This is social network really good!!!" like="11" />
                <Posts name="Katya" message="Who want's add me friends?" like="13" />
            </div>
        </div>
    );
}

export default MyPosts;
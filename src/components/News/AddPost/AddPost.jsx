import React from "react";
import style from "./AddPost.module.css";


const AddPost = () => {
    return (
        <textarea placeholder="What's new?" className={style.area}></textarea>
    );
}


export default AddPost;
import React from "react";
import style from "./AddPost.module.css";


const AddPost = () => {
    return(
        <div className={style.add_post}>
                <textarea placeholder="What's new?" className={style.area}></textarea>
            </div>
    );
}


export default AddPost;
import React from "react";
import style from "./NewsPosts.module.css";
import Post from "./Post/Post.jsx";


const NewsPosts = (props) => {
    
    const newPost = props.state.map(postElem => 
        <Post groupName={postElem.groupName} date={postElem.date} avatar={postElem.avatar} like={postElem.like} comment={postElem.comment} share={postElem.share} views={postElem.views} img={postElem.img} />)

    return (
        <div className={style.news_posts}>
            {newPost}
        </div>
    );
}

export default NewsPosts;
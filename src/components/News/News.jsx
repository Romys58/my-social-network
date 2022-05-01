import style from "./News.module.css";
import React from "react";
import AddPost from "./AddPost/AddPost";
import Stories from "./Stories/Stories";
import Aside from "./Aside/Aside";
import NewsPosts from "./NewsPosts/NewsPosts";




const News = (props) => {
    
    const newNewsPostData = props.newsPostData.map(postElement => <NewsPosts
        groupName={postElement.groupName}
        date={postElement.date}
        avatar={postElement.avatar}
        like={postElement.like}
        comment={postElement.comment}
        share={postElement.share}
        views={postElement.views} />)

    return (
        <div className={style.news}>
            <AddPost />
            <Stories state={props.state.storiesData} />
            <Aside state={props.state.asideItemData} />
            {newNewsPostData}
        </div>
    )
}

export default News;
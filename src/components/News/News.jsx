import style from "./News.module.css";
import React from "react";
import AddPost from "./AddPost/AddPost";
import Stories from "./Stories/Stories";
import Aside from "./Aside/Aside";
import NewsPosts from "./NewsPosts/NewsPosts";




const News = (props) => {
    return (
        <div className={style.news}>
            <AddPost />
            <Stories state={props.state.storiesData} />
            <Aside state={props.state.asideItemData} />
            <NewsPosts />
        </div>
    )
}

export default News;
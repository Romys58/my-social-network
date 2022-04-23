import style from "./News.module.css";
import React from "react";
import AddPost from "./AddPost/AddPost";
import Stories from "./Stories/Stories";
import Aside from "./Aside/Aside";




const News = (props) => {
    return (
        <div className={style.news}>
            <AddPost />
            <Stories state={props.state.storiesData} />
            <Aside state={props.state.asideItemData} />
            <div className={style.post}>
                p
            </div>
        </div>
    )
}

export default News;
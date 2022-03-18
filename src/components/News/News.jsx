import style from "./News.module.css";
import React from "react";
import AddPost from "./AddPost/AddPost";
import Stories from "./Stories/Stories";
import Aside from "./Aside/Aside";

const News = () => {
    return (
        <div className={style.news}>
            <AddPost />
            <Stories />
            <Aside />
        </div>
    )
}

export default News;
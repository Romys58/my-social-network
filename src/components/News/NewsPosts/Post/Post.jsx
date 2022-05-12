import React from "react";
import style from "./Post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.header_post}>

                <img src={props.avatar} className={style.post_img} />

                <div className={style.author}>
                    {props.groupName}
                </div>
                <div className={style.date}>
                    {props.date}
                </div>
            </div>











            <div className={style.content_post}>
                <img className={style.content_img} src={props.img} />
            </div>











            <div className={style.footer_post}>
                <button className={style.like_post} >
                    <FontAwesomeIcon icon="fa-regular fa-heart" size="xl" />
                    {props.like}
                </button>
                <button className={style.comment_post}>
                    <FontAwesomeIcon icon="fa-regular fa-comment" size="xl" />
                    {props.comment}
                </button>
                <button className={style.share_post}>
                    <FontAwesomeIcon icon="fa-regular fa-share-from-square" size="xl" />
                    {props.share}
                </button>
                <div className={style.views}>
                    <FontAwesomeIcon icon="fa-regular fa-eye" transform="left-5" size="xl" />
                    {props.views}
                </div>
            </div>


        </div>
    );
}

export default Post;
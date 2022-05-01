import React from "react";
import style from "./NewsPosts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const NewsPosts = (props) => {
    return (
        <div className={style.post}>
            <div className={style.header_post}>
                <div className={style.post_img}>
                    {props.avatar}
                </div>
                <div className={style.author}>
                    {props.groupName}
                </div>
                <div className={style.date}>
                    {props.date}
                </div>
            </div>

            {/* ------------------------------------------------------------------- */}

            <div className={style.content_post}>
                <img className={style.content_img} src="/contentPhoto/contentPhoto1.jpg" />
            </div>

            {/* ------------------------------------------------------------------- */}

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

export default NewsPosts;
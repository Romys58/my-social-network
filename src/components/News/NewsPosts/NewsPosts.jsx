import React from "react";
import style from "./NewsPosts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NewsPosts = () => {
    return (
        <div className={style.post}>
            <div className={style.header_post}>
                <img className={style.post_img} src="/icons/camera.png" />
                <img className={style.dots_img} src="/icons/dots.svg" />
                <img className={style.follow_img} src="/icons/follow.svg" />
                <div className={style.author}>
                    Penza Sova
                </div>
                <div className={style.date}>
                    27.04.2022
                </div>
            </div>

            <div className={style.content_post}>
                <img className={style.content_img} src="/contentPhoto/contentPhoto1.jpg" />
            </div>

            <div className={style.footer_post}>
                <div className={style.buttons_post}>
                    <button className={style.like_post} >
                        <FontAwesomeIcon icon="fa-regular fa-heart" size="xl"/>
                        431
                    </button>
                    <button className={style.comment_post}>
                        <FontAwesomeIcon icon="fa-regular fa-comment" size="xl" />
                        3
                    </button>
                    <button className={style.share_post}>
                        <FontAwesomeIcon icon="fa-regular fa-share-from-square" size="xl" />
                        59
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NewsPosts;
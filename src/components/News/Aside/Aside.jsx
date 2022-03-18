import React from "react";
import style from "./Aside.module.css";


const Aside = () => {
    return (
        <div className={style.aside_navbar}>

            <div className={style.aside_nav}>
                <div className={style.item}>
                    <a href="#" className={style.link}>News</a>
                </div>
                <div className={style.item}>
                    <a href="#" className={style.link}>Photos</a>
                </div>
                <div className={style.item}>
                    <a href="#" className={style.link}>Videos</a>
                </div>
                <div className={style.item}>
                    <a href="#" className={style.link}>Podcasts</a>
                </div>
                <div className={style.item}>
                    <a href="#" className={style.link}>Coronavirus</a>
                </div>
                <div className={style.item}>
                    <a href="#" className={style.link}>Footeball</a>
                </div>
                <div className={style.item}>
                    <a href="#" className={style.link}>Recomended</a>
                </div>
                <div className={style.item}>
                    <a href="#" className={style.link}>Search</a>
                </div>

                <span><hr /></span>

                <div className={style.item}>
                    <a href="#" className={style.link}>Reactions</a>
                </div>
                <div className={style.item}>
                    <a href="#" className={style.link}>Updates</a>
                </div>
                <div className={style.item}>
                    <a href="#" className={style.link}>Comments</a>
                </div>
            </div>

            

        </div>
    );
}

export default Aside;
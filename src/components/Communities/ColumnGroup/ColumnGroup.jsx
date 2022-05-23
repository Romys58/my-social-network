import React from "react";
import HeadGroup from "./HeadGroup/HeadGroup";
import style from "./ColumnGroup.module.css";
import HeadGallery from "./HeadGallery/HeadGallery";


const ColumnGroup = () => {
    return (
        <div className={style.column_group}>
            <HeadGroup />
            <HeadGallery />
            <div className={style.body_page}>
                <div className={style.head_page}>
                    <a href="#" className={style.tabs}>All comunities</a>
                    <a href="#" className={style.tabs}>Managed comunities</a>
                    <button className={style.head_button}>Create community</button>
                </div>
            </div>
        </div>
    );
}

export default ColumnGroup;
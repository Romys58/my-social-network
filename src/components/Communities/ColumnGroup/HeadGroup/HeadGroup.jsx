import React from "react";
import style from "./HeadGroup.module.css";

const HeadGroup = () => {
    return (
        <div className={style.head_group}>
                <span>Recently visited</span>
                <a href="#" className={style.head_link}>clear</a>
            </div>
    );
}

export default HeadGroup;
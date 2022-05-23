import style from "./Communities.module.css";
import React from "react";
import ColumnGroup from "./ColumnGroup/ColumnGroup";

const Communities = () => {
    return (
        <div className={style.communities_body}>
            <ColumnGroup />
        </div>
    )
}

export default Communities;
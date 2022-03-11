import style from "./Search.module.css";
import React from "react";


const Search = () => {
    return(
        <div className={style.search}>
            <input placeholder="Search" type="text"></input>
        </div>
    )
}

export default Search;
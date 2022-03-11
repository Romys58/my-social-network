import React from "react";
import style from "./Logo.module.css";


const Logo = () => {
    return(
        <div className={style.logo}>
                <img className={style.image} src="./logo/logo.svg"/>
                <h3 className={style.title}>etwork</h3>
            </div>
    );
}

export default Logo;
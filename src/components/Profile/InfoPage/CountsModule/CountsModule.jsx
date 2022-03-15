import React from "react";
import style from "./CountsModule.module.css";


const CountsModule = () => {
    return (
        <div className={style.counts_module}>
            <ul className={style.ul}>
                <li className={style.li}><a className={style.link} href="#">followers</a></li>
                <li className={style.li}><a className={style.link} href="#">friends</a></li>
                <li className={style.li}><a className={style.link} href="#">photo</a></li>
                <li className={style.li}><a className={style.link} href="#">music</a></li>
            </ul>
        </div>
    );
}

export default CountsModule;
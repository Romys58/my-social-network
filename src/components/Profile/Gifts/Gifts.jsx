import React from "react";
import style from "./Gifts.module.css";


const Gifts = () => {
    return(
        <div className={style.gift}>
                <h4 className={style.h4}>Gifts</h4>
                <ul>
                    <li className={style.li}><img src="./icons/gift.svg" className={style.img}/></li>
                    <li className={style.li}><img src="./icons/gift.svg" className={style.img}/></li>
                    <li className={style.li}><img src="./icons/gift.svg" className={style.img}/></li>
                </ul>
            </div>
    );
}

export default Gifts;
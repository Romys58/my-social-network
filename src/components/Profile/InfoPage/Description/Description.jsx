import React from "react";
import style from "./Description.module.css";


const Description = () => {
    return(
        <div className={style.description}>
                    <h1>Roman Filippov</h1>
                    <div className={style.status}>
                        <h4>Set status</h4>
                    </div>
                </div>
    );
}

export default Description;
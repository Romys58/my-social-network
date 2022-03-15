import React from "react";
import style from "./PagePhoto.module.css";


const PagePhoto = () => {
    return(
        <div className={style.page_photo}>
                <h3 className={style.h3} >My photos</h3>
                <h4 className={style.h4} >show on map</h4>
                <img className={style.img} src="./icons/add_photo.svg"/>
                
            </div>
    );
}

export default PagePhoto;
import React from "react";
import CountsModule from "./CountsModule/CountsModule";
import Description from "./Description/Description";
import style from "./InfoPage.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const InfoPage = () => {
    return(
        <div className={style.info_page}>
                <Description />
                <ProfileInfo />
                <CountsModule />
            </div>
    );
}

export default InfoPage;
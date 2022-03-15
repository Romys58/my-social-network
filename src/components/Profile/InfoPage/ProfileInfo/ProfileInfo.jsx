import React from "react";
import style from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return(
        <div className={style.profile_info}>
                    <div className={style.info_section}>
                        <p>Birthday:</p>
                        <p>Current city:</p>
                        <p>Institution:</p>
                        <p>Languages:</p>
                        <p>Instagram:</p>
                    </div>

                    <div className={style.info_section_two}>
                        <p>April 3, 1999</p>
                        <p>Penza</p>
                        <p>IT technologies information security</p>
                        <p>Russian, English</p>
                        <p>r.filippov58</p>
                    </div>
                </div>
    );
}

export default ProfileInfo;
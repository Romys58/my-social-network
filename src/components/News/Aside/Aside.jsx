import React from "react";
import style from "./Aside.module.css";
import AsideNavbar from "./AsideNavbar/AsideNavbar";


const Aside = (props) => {
    const newAsideItemData = props.state.map(asideElement => <AsideNavbar id={asideElement.id} text={asideElement.text} />)
    return (
        <div className={style.aside}>
            <div className={style.aside_navbar}>
                {newAsideItemData}
            </div>


        </div>
    );
}

export default Aside;
import React from "react";
import style from "./Aside.module.css";
import AsideNavbar from "./AsideNavbar/AsideNavbar";


const asideItemData = [
    {id: "1", text: "News"},
    {id: "2", text: "Photos"},
    {id: "3", text: "Videos"},
    {id: "4", text: "Podcasts"},
    {id: "5", text: "Coronavirus"},
    {id: "6", text: "Football"},
    {id: "7", text: "Recommended"},
    {id: "8", text: "Search"},
    {id: "9", text: "Reactions"},
    {id: "10", text: "Updates"},
    {id: "11", text: "Comments"},
]

const newAsideItemData = asideItemData.map(asideElement => <AsideNavbar id={asideElement.id} text={asideElement.text} />)

const Aside = () => {
    return (
        <div className={style.aside}>
            <div className={style.aside_navbar}>
                {newAsideItemData}
            </div>


        </div>
    );
}

export default Aside;
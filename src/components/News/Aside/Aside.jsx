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


const Aside = () => {
    return (
        <div className={style.aside}>
            <div className={style.aside_navbar}>
                <AsideNavbar id={asideItemData [0].id} text={asideItemData [0].text} />
                <AsideNavbar id={asideItemData [1].id} text={asideItemData [1].text} />
                <AsideNavbar id={asideItemData [2].id} text={asideItemData [2].text} />
                <AsideNavbar id={asideItemData [3].id} text={asideItemData [3].text} />
                <AsideNavbar id={asideItemData [4].id} text={asideItemData [4].text} />
                <AsideNavbar id={asideItemData [5].id} text={asideItemData [5].text} />
                <AsideNavbar id={asideItemData [6].id} text={asideItemData [6].text} />
                <AsideNavbar id={asideItemData [7].id} text={asideItemData [7].text} />
                <span><hr /></span>
                <AsideNavbar id={asideItemData [8].id} text={asideItemData [8].text} />
                <AsideNavbar id={asideItemData [9].id} text={asideItemData [9].text} />
                <AsideNavbar id={asideItemData [10].id} text={asideItemData [10].text} />
            </div>


        </div>
    );
}

export default Aside;
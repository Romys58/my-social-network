import React from "react";
import style from "./FriendsList.module.css";
import FriendsUserRow from "./FriendsUserRow/FriendsUserRow";


const friendsUserRowData = [
    { name: "Evgenia Saunina", info: "education center, college for makeup artists and dipilation" },
    { name: "Kirill Derevyashkin", info: "Penza College of Information and Industrial Technologies" },
    { name: "Alexey Astashkin", info: "Penza College of Food Industry and Commerce (ex. PL 21, PL 42)" },
    { name: "Maxim Krivulin", info: "PI im. Belinsky PSU (ex. PGPU)" },
    { name: "Denis Bazyaskin", info: "Penza State Polytechnic College (formerly Instrument-making College" },
    { name: "Evgeny Krasnobaev", info: "IP Krasnobaev IT. Cabinet furniture from the manufacturer" },
    { name: "Olga Subbotina", info: "Cutting and sewing" },
    { name: "Anastasia Kolotkova", info: "Internet entrepreneur" },
    { img: "/icons/camera.png" } // Avatar friends
]

const newUserRowData = friendsUserRowData.map(userRowElement => <FriendsUserRow name={userRowElement.name}
    info={userRowElement.info} img={userRowElement.img} />)


const FriendsList = () => {
    return (
        <div className={style.friends__list}>
            {newUserRowData}
        </div>
    );
}

export default FriendsList;
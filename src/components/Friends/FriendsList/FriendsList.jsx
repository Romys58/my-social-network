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


const FriendsList = () => {
    return (
        <div className={style.friends__list}>
            <FriendsUserRow name={friendsUserRowData[0].name} info={friendsUserRowData[0].info}
                img={friendsUserRowData[8].img} />
            <FriendsUserRow name={friendsUserRowData[1].name} info={friendsUserRowData[1].info}
                img={friendsUserRowData[8].img} />
            <FriendsUserRow name={friendsUserRowData[2].name} info={friendsUserRowData[2].info}
                img={friendsUserRowData[8].img} />
            <FriendsUserRow name={friendsUserRowData[3].name} info={friendsUserRowData[3].info}
                img={friendsUserRowData[8].img} />
            <FriendsUserRow name={friendsUserRowData[4].name} info={friendsUserRowData[4].info}
                img={friendsUserRowData[8].img} />
            <FriendsUserRow name={friendsUserRowData[5].name} info={friendsUserRowData[5].info}
                img={friendsUserRowData[8].img} />
            <FriendsUserRow name={friendsUserRowData[6].name} info={friendsUserRowData[6].info}
                img={friendsUserRowData[8].img} />
            <FriendsUserRow name={friendsUserRowData[7].name} info={friendsUserRowData[7].info}
                img={friendsUserRowData[8].img} />
        </div>
    );
}

export default FriendsList;
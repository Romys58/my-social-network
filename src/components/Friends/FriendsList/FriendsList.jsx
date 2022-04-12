import React from "react";
import style from "./FriendsList.module.css";
import FriendsUserRow from "./FriendsUserRow/FriendsUserRow";


const FriendsList = () => {
    return(
        <div className={style.friends__list}>
                <FriendsUserRow name="Evgenia Saunina" info="education center, college for makeup artists and dipilation" />
                <FriendsUserRow name="Kirill Derevyashkin" info="Penza College of Information and Industrial Technologies" />
                <FriendsUserRow name="Alexey Astashkin" info="Penza College of Food Industry and Commerce (ex. PL 21, PL 42)" />
                <FriendsUserRow name="Maxim Krivulin" info="PI im. Belinsky PSU (ex. PGPU)" />
                <FriendsUserRow name="Denis Bazyaskin" info="Penza State Polytechnic College (formerly Instrument-making College" />
                <FriendsUserRow name="Evgeny Krasnobaev" info="IP Krasnobaev IT. Cabinet furniture from the manufacturer" />
                <FriendsUserRow name="Olga Subbotina" info="Cutting and sewing" />
                <FriendsUserRow name="Anastasia Kolotkova" info="Internet entrepreneur" />
            </div>
    );
}

export default FriendsList;
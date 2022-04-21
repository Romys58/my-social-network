import React from "react";
import style from "./FriendsList.module.css";
import FriendsUserRow from "./FriendsUserRow/FriendsUserRow";



const FriendsList = (props) => {

    const newUserRowData = props.friendsData.map(userRowElement => <FriendsUserRow name={userRowElement.name}
        info={userRowElement.info} img={userRowElement.img} />)

    return (
        <div className={style.friends__list}>
            {newUserRowData}
        </div>
    );
}

export default FriendsList;
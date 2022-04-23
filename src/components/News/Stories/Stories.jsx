import React from "react";
import style from "./Stories.module.css";
import StoriesItem from "./StoriesItem/StoriesItem";




const Stories = (props) => {

    const storiesItem = props.state.map(storiesElement => <StoriesItem img={storiesElement.img} name={storiesElement.name} />)

    return (
        <div className={style.stories}>
            <h3 className={style.h3}>Stories</h3>
            {storiesItem}
        </div>
    );
}

export default Stories;
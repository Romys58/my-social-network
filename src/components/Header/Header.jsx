import style from './Header.module.css';
import React from "react";
import Search from './Search/Search';
import Logo from './Logo/Logo';
import Notify from './Notify/Notify';

const Header = () => {
    return (
        <div className={style.header}>
            <Search />
            <Logo />
            <Notify />
        </div>
    );
}

export default Header;
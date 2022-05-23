import style from './Header.module.css';
import React from "react";
import Search from './Search/Search';
import Logo from './Logo/Logo';
import Notify from './Notify/Notify';

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.header_nav}>
                
                    <li className={style.list}><Logo /></li>
                    
                    <li className={style.list}><Search /></li>
                    
                    <li className={style.list}><Notify /></li>
                
                
                
                
                
                
                
            </div>
        </div>
    );
}

export default Header;
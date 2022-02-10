import style from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={style.navbar}>
            <div className={style.navLink}>
                <a href="#" className={style.link}>My profile</a>
                </div>
            <div className={style.navLink}>
                <a href="#" className={style.link}>News</a>
                </div>
            <div className={style.navLink}>
                <a href="#" className={style.link}>Messenger</a>
                </div>
            <div className={style.navLink}>
                <a href="#" className={style.link}>Friends</a>
                </div>
            <div className={style.navLink}>
                <a href="#" className={style.link}>Communities</a>
                </div>
            <div className={style.navLink}>
                <a href="#" className={style.link}>Photos</a>
                </div>
            <div className={style.navLink}>
                <a href="#" className={style.link}>Music</a>
                </div>
            <div className={style.navLink}>
                <a href="#" className={style.link}>Videos</a>
                </div>
            <div className={style.navLink}>
                <a href="#" className={style.link}>Settings</a>
            </div>
        </div>
    );
}

export default Navbar;
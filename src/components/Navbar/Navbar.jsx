import style from "./Navbar.module.css";
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className={style.navbar}>
            <div className={style.navLink}>
                <Link to="/profile">My profile</Link>
                </div>
            <div className={style.navLink}>
                <Link to="/news">News</Link>
                </div>
            <div className={style.navLink}>
                <Link to="/messenger">Messenger</Link>
                </div>
            <div className={style.navLink}>
                <Link to="/friends">Friends</Link>
                </div>
            <div className={style.navLink}>
                <Link to="/commuties">Communities</Link>
                </div>
            <div className={style.navLink}>
                <Link to="/photos">Photos</Link>
                </div>
            <div className={style.navLink}>
                <Link to="/music">Music</Link>
                </div>
            <div className={style.navLink}>
                <Link to="/videos">Videos</Link>
                </div>
            <div className={style.navLink}>
                <Link to="/settings">Settings</Link>
            </div>
        </div>
    );
}

export default Navbar;
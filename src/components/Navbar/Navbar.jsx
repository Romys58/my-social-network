import style from "./Navbar.module.css";
import React from "react";
import NavbarItem from "./NavbarItem/NavbarItem";


const navbarItemData = [
       { path: "/profile", img: "./icons/profile.svg", text: "Profile" },
       { path: "/news", img: "./icons/news.svg", text: "News" },
       { path: "/messenger", img: "./icons/messenger.svg", text: "Messenger" },
       { path: "/friends", img: "./icons/friends.svg", text: "Friends" },
       { path: "/communities", img: "./icons/communities.svg", text: "Communities" },
       { path: "/photos", img: "./icons/photos.svg", text: "Photos" },
       { path: "/music", img: "./icons/music.svg", text: "Music" },
       { path: "/videos", img: "./icons/videos.svg", text: "Videos" },
       { path: "/settings", img: "./icons/settings.svg", text: "Settings" },
]


const Navbar = () => {
       return (
              <div className={style.navbar}>
                     <NavbarItem path={navbarItemData [0].path} img={navbarItemData [0].img} text={navbarItemData [0].text} />
                     <NavbarItem path={navbarItemData [1].path} img={navbarItemData [1].img} text={navbarItemData [1].text} />
                     <NavbarItem path={navbarItemData [2].path} img={navbarItemData [2].img} text={navbarItemData [2].text} />
                     <NavbarItem path={navbarItemData [3].path} img={navbarItemData [3].img} text={navbarItemData [3].text} />
                     <NavbarItem path={navbarItemData [4].path} img={navbarItemData [4].img} text={navbarItemData [4].text} />
                     <NavbarItem path={navbarItemData [5].path} img={navbarItemData [5].img} text={navbarItemData [5].text} />
                     <NavbarItem path={navbarItemData [6].path} img={navbarItemData [6].img} text={navbarItemData [6].text} />
                     <NavbarItem path={navbarItemData [7].path} img={navbarItemData [7].img} text={navbarItemData [7].text} />
                     <NavbarItem path={navbarItemData [8].path} img={navbarItemData [8].img} text={navbarItemData [8].text} />
              </div>
       );
}


export default Navbar;
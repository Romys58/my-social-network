import { library } from '@fortawesome/fontawesome-svg-core';
// ИМПОРТИРУЕМ REGULAR ICONS.
import {
    // Иконки к посту, который находится в новостях REGULAR.
    faHeart,
    faComment,
    faShareFromSquare,
    // Иконки к навигационной панеле REGULAR.
    faCircleUser,
    faNewspaper,
    faImage,


} from '@fortawesome/free-regular-svg-icons';


// ИМПОРТИРУЕМ SOLID ICONS.
import {
    //Иконки к навигационной панеле SOLID.
    faUserGroup,
    faPeopleGroup,
    faMusic,
    faVideo,
    faGears,
} from '@fortawesome/free-solid-svg-icons';


// БИБЛИОТЕКА ВСЕХ ИКОНОК.
library.add(
    //Иконки к постам в новостях.
    faHeart,
    faComment,
    faShareFromSquare,
    // Иконки к навигационной панеле.
    faCircleUser,
    faNewspaper,
    faUserGroup,
    faPeopleGroup,
    faImage,
    faMusic,
    faVideo,
    faGears,

);




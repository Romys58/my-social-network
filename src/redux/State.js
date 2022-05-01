
const state = {

    friends: {
        // информация о друзьях на вкладке friends
        friendsUserRowData: [

            {
                name: "Evgenia Saunina",
                info: "education center, college for makeup artists and dipilation",
                img: "/icons/camera.png"
            },

            {
                name: "Kirill Derevyashkin",
                info: "Penza College of Information and Industrial Technologies",
                img: "/icons/camera.png"
            },

            {
                name: "Alexey Astashkin",
                info: "Penza College of Food Industry and Commerce (ex. PL 21, PL 42)",
                img: "/icons/camera.png"
            },

            {
                name: "Maxim Krivulin",
                info: "PI im. Belinsky PSU (ex. PGPU)",
                img: "/icons/camera.png"
            },

            {
                name: "Denis Bazyaskin",
                info: "Penza State Polytechnic College (formerly Instrument-making College",
                img: "/icons/camera.png"
            },

            {
                name: "Evgeny Krasnobaev",
                info: "IP Krasnobaev IT. Cabinet furniture from the manufacturer",
                img: "/icons/camera.png"
            },

            {
                name: "Olga Subbotina",
                info: "Cutting and sewing",
                img: "/icons/camera.png"
            },


        ],

        // счетчик на вкладке friends {All Friends and Online friends}.
        tabsData: [
            {
                id: "1",
                counter: "36",
                text: "All friends"
            },

            {
                id: "2",
                counter: "6",
                text: "Friends online"
            }
        ],
    },

    messenger: {

        // Имя пользователя диалога
        nameData: [
            {
                name: "Evgenia",
                id: "1"
            },
            {
                name: "Sveta",
                id: "2"
            },
            {
                name: "Andrey",
                id: "3"
            },
            {
                name: "Kirill",
                id: "4"
            },
            {
                name: "Dmitriy",
                id: "5"
            },
            {
                name: "Anton",
                id: "6"
            },
            {
                name: "Kostya",
                id: "7"
            },
            {
                name: "Olya",
                id: "8"
            }
        ],

        // сообщение от пользователя в диалогах
        messageData: [
            {
                message: "Hi, aren't you studying react right now?"
            },
            {
                message: "Do you know how to do it?"
            },
            {
                message: "At 14:00 after lunch we will meet on the spot"
            },
            {
                message: "What time will you be home today?"
            },
            {
                message: "I think we should move on"
            },
            {
                message: "the typescript is not that complicated"
            },
            {
                message: "look at my project on github"
            },
            {
                message: "Yes, I will go there"
            }
        ],
    },

    profile: {
        // сообщение в постах и лайки
        postsData: [
            {
                message: "It's my first post!",
                like: 15
            },
            {
                message: "Hey , it's me in the Network..",
                like: 23
            },
            {
                message: "This is social network really good!!!",
                like: 11
            },
            {
                message: "Who want's add me friends?",
                like: 13
            },
        ],

        countsData: [
            { id: "1", text: "followers", counter: "29" },
            { id: "2", text: "friends", counter: "114" },
            { id: "3", text: "photo", counter: "1" },
            { id: "4", text: "music", counter: "2390" }
        ],
    },

    news: {
        storiesData: [
            { img: "/icons/camera.png", name: "Andrey" },
            { img: "/icons/camera.png", name: "Anastasia" },
            { img: "/icons/camera.png", name: "Petr" },
            { img: "/icons/camera.png", name: "Olya" },
            { img: "/icons/camera.png", name: "Fedya" },
        ],

        asideItemData: [
            { id: "1", text: "News" },
            { id: "2", text: "Photos" },
            { id: "3", text: "Videos" },
            { id: "4", text: "Podcasts" },
            { id: "5", text: "Coronavirus" },
            { id: "6", text: "Football" },
            { id: "7", text: "Recommended" },
            { id: "8", text: "Search" },
            { id: "9", text: "Reactions" },
            { id: "10", text: "Updates" },
            { id: "11", text: "Comments" },
        ],

        newsPostData: [
            { groupName: "localhost", date: "today at 4:22 pm", avatar: "/icons/camera.png", like: "431", comment: "3", share: "41", views: "1675" },
            { groupName: "Web-page", date: "today at 1:32 pm", avatar: "/icons/camera.png", like: "32", comment: "1", share: "0", views: "114" },
            { groupName: "It-school", date: "today at 9:58 am", avatar: "/icons/camera.png", like: "54", comment: "0", share: "0", views: "118" },
            { groupName: "/dev/null", date: "today at 4:15 pm", avatar: "/icons/camera.png", like: "97", comment: "0", share: "3", views: "245" },
            { groupName: "IT-CAT", date: "today at 1:25 pm", avatar: "/icons/camera.png", like: "56", comment: "13", share: "1", views: "314" },
            { groupName: "Life-Hack", date: "27 Apr at 17:19 am", avatar: "/icons/camera.png", like: "446", comment: "97", share: "214", views: "2467" },
            { groupName: "Web-designer", date: "25 Apr at 16:11 am", avatar: "/icons/camera.png", like: "643", comment: "114", share: "35", views: "113" },
            { groupName: "JavaScript", date: "25 Apr at 15:08 am", avatar: "/icons/camera.png", like: "54", comment: "0", share: "0", views: "466" },
            { groupName: "It-kamasutra", date: "24 Apr at 12:36 am", avatar: "/icons/camera.png", like: "90", comment: "13", share: "1", views: "97" },
            { groupName: "It-inkubator", date: "23 Apr at 7:00 pm", avatar: "/icons/camera.png", like: "38", comment: "6", share: "9", views: "418" },
        ],

    },



}

export default state;
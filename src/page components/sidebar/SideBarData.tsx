import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
export const SideBarData = [
    {
        id: 1,
        title: "Home",
        path: "/home",
        icon: <AiIcons.AiOutlineHome/>,
        className: "sidebar-items"
    },
    {
        id:2,
        title: "Events",
        path: "/home",
        icon: <BsIcons.BsCalendar2Event />,
        className: "sidebar-items"
    },
    {
        id: 3,
        title: "Tracks",
        path: "/tracklist",
        icon: <GiIcons.GiRoad/>,
        className: "sidebar-items"
    },
    {
        id: 3,
        title: "",
        path: "/",
        icon: "",
        className: "sidebar-items"
    },
]

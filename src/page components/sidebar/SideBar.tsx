import {useState} from "react";
import "./SideBar.css";
import * as FaIcons from "react-icons/fa";
import {Link, useLocation} from "react-router-dom";
import { SideBarData } from "./SideBarData.tsx"

function SideBar() {

    const location = useLocation();


    const [sidebar, setsidebar] = useState(false);

    const showSideBar = () =>{
        setsidebar(!sidebar);
    }

    function handleToEvents() {
        const event = new CustomEvent('ToEvents');
        document.dispatchEvent(event);
    }

    function handleToHome() {
        const event = new CustomEvent('ToHome');
        document.dispatchEvent(event);
    }

    window.addEventListener('scroll', function() {
        const sidebar = document.getElementById('sidebar');
        if (window.scrollY > 0 && sidebar != null) {
            sidebar.classList.add('sidebarscroll');
        } else if (sidebar != null) {
            sidebar.classList.remove('sidebarscroll');
        }
    });

    return (
        <div className={"main-sidebar"}>
            <FaIcons.FaBars onClick={showSideBar} className={"main-sidebar-baricon"}/>
            <nav className={sidebar ? "main-sidebar-visible": "main-sidebar-notvisible"} id={"sidebar"}>
                <ul onClick={showSideBar}>
                    {SideBarData.map((item,index) =>{
                        return (
                            <li className={"sidebar-items"} key={index}>
                                <Link to={item.path} onClick={() => {if (location.pathname == "/home" && item.id == 1) {
                                    handleToHome()
                                } else if (location.pathname == "/home" && item.id == 2) {
                                    handleToEvents()
                                }}}>
                                    {item.icon}
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default SideBar;
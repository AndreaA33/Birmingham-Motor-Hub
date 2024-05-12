import './NavBar.css'
import {useLocation} from "react-router-dom";
import {CgSearch} from "react-icons/cg";
import Car1 from "../../assets/car1.jpeg"
import { useState, useEffect } from 'react';
import SideBar from '../sidebar/SideBar';


function NavBar() {

    const location = useLocation()
    const [isEvent, setEvent] = useState(false)

    useEffect(() => {
        if (location.pathname === '/home' && isEvent == true) {
            const eventsSection = document.getElementById('events');
            if (eventsSection) {
                eventsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.pathname && isEvent]);

    function handleToEvents() {
        const event = new CustomEvent('ToEvents');
        document.dispatchEvent(event);
    }

    function handleToHome() {
        const event = new CustomEvent('ToHome');
        document.dispatchEvent(event);
    }

    function redirectToEvents(){
        window.location.href = '/home'
        setEvent(true)
    }

    function redirectToHome() {
        window.location.href = '/home'
    }

    function redirectToProfile(){
        window.location.href = '/profile'
    }

    function redirectToTrackList() {
        window.location.href = '/tracklist'
    }

    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 0 && navbar != null) {
            navbar.classList.add('navbarscroll');
        } else if (navbar != null){
            navbar.classList.remove('navbarscroll');
        }
    });

    function handleLogout() {
        setTimeout(() => {
            window.location.href = '/';
          }, 2000);
    }

    return (
        <nav className={"main-navbar"} id={"navbar"}>
            <SideBar/>
            <div className={"main-navbar-centrelinks"}>
                <button className={"main-navbar-link"} onClick={location.pathname === "/home" ? handleToHome:redirectToHome}>Home</button>
                <button className={"main-navbar-link"} onClick={location.pathname === "/home" ? handleToEvents:redirectToEvents}>Events</button>
                <button className={"main-navbar-link"} onClick={redirectToTrackList}>Tracks</button>
            </div>
            <div className={"main-navbar-buttons"}>
                <button className={"main-navbar-sidebutton"}><CgSearch style={{fontSize: 12}}/></button>
                <button className={"main-navbar-sidebutton"} onClick={handleLogout}>Logout</button>
                <img src={Car1} alt={"Profile pic"} className={"main-navbar-buttons-profile"} onClick={redirectToProfile}/>
            </div>
        </nav>
    )
}

export default NavBar
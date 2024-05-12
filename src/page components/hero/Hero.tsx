import { useEffect } from "react";
import './Hero.css'
import background from "../../assets/login-bg.webp"


function Main() {

    useEffect( () =>{
        function ToHome() {
            const eventsSection = document.getElementById('home');
            if (eventsSection != null){
                eventsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        document.addEventListener('ToHome', ToHome);
        return () => {
            document.removeEventListener('ToHome', ToHome);
        };
    },[])

    return (
        <div className={"main-hero"} id={"home"}>
            <h1 className={"main-hero-txt1"}>BIRMINGHAM</h1>
            <h1 className={"main-hero-txt2"}>MOTOR</h1>
            <h1 className={"main-hero-txt3"}>HUB</h1>
            <p className={"main-hero-txt4"}>Revitalize Your Passion for Cars: Explore Birmingham's Premier Hub for Auto Enthusiasts</p>
            <img className={"main-hero-background"} src={background}></img>
        </div>
    );
}

export default Main;
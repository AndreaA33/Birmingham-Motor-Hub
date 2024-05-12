import NavBar from "../../page components/navbar/NavBar.tsx";
import Events from "../../page components/events/EventsComp.tsx";
import Hero from "../../page components/hero/Hero.tsx";
import './Home.css'
import Footer from "../../page components/footer/Footer.tsx";

function Home() {
    return (
        <div className={"main-home"}>
            <NavBar/>
            <Hero/>
            <Events/>
            <Footer/>
        </div>
    );
}

export default Home;
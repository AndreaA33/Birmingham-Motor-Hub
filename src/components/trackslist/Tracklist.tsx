import NavBar from "../../page components/navbar/NavBar.tsx";
import "./Tracklist.css"
import trackimg1 from "../../assets/event1.jpeg"
import trackimg2 from "../../assets/track2.jpg"

function Tracklist() {
    function redirectToTrack(){
        window.location.href = '/track1'
    }

    return (
        <div className={"main-Tracklist"}>
            <NavBar/>
            <h1 className={"main-Tracklist-title"}>Tracks</h1>
            <h2 className={"main-Tracklist-subtitle"}>Discover new race tracks around Birmingham</h2>
            <p className={"main-Tracklist-p"}>Drive cars and save them to your profile</p>
            <div className={"main-Tracklist-container"}>
                <div className={"main-Tracklist-pagerow"}>
                    <img src={trackimg1} alt={"track 1 image"} className={"main-Tracklist-pagerow-img"} onClick={redirectToTrack}/>
                    <h3 className={"main-Tracklist-pagerow-name"}>CURBOROUGH SPRINT COURSE</h3>
                </div>
                <div className={"main-Tracklist-pagerow"}>
                    <img src={trackimg2} alt={"track 1 image"} className={"main-Tracklist-pagerow-img"}/>
                    <h3 className={"main-Tracklist-pagerow-name"}>BIRMINGHAM WHEELS RACEWAY</h3>
                </div>
                <div className={"main-Tracklist-pagerow"}>
                    <img src={trackimg1} alt={"track 1 image"} className={"main-Tracklist-pagerow-img"}/>
                    <h3 className={"main-Tracklist-pagerow-name"}>Track name</h3>
                </div>
            </div>
        </div>
    );
}

export default Tracklist;
import NavBar from "../../page components/navbar/NavBar.tsx";
import "./Track1.css"
import TrackMain from "../../page components/track/Track-Main.tsx";
import TrackCars from "../../page components/track/Track-Cars.tsx";
import Map from "../../page components/track/Map-comp.tsx";

function Track1() {
    return (
        <div className={"main-track1"}>
            <NavBar/>
            <TrackMain/>
            <TrackCars/>
            <Map/>
        </div>
    );
}

export default Track1;
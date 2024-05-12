import "./Track-Main.css";
import track1 from "../../assets/Track_1_no_bg.mp4"
import startarrow from "../../assets/startarrow.png"
import Slider from '@mui/material/Slider';
import {useEffect, useRef, useState} from "react";

function TrackMain() {

    function valuetext(value: number) {
        setPlaybackspeed(value)
        return '${value}';
    }

    const [VidPlay, setVidPlay] = useState(true);
    const [Playbackspeed, setPlaybackspeed] = useState(1)
    const vidRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (vidRef.current){
            vidRef.current.playbackRate = Playbackspeed
        }
    }, [Playbackspeed]);

    const playfunc = () => {
        if (VidPlay && vidRef.current != null){
            vidRef.current.play();
        } else if (vidRef.current != null) {
            vidRef.current.pause();
        }
        setVidPlay(!VidPlay)
    };

    const endfunc = () => {
        if (vidRef.current != null){
            setVidPlay(true);
        }
    };

    const resetfunc = () => {
        if (vidRef.current != null) {
            vidRef.current.currentTime = 0;
        }
    };

    return (
        <div className={"main-track-main"}>
            <h1 className={"main-track-main-title"}>Curborough sprint course</h1>
            <div className={"main-track-main-image"}>
                <video className={"main-track-main-image1"} src={track1} ref={vidRef} onEnded={endfunc} muted/>
            </div>
            <div className={"main-track-main-desc"}>
                <h3>Description</h3>
                <div className={"main-track-main-desc-p"}>
                    <p>Curborough Sprint Course is near Lichfield in Staffordshire and is one of the most popular Motorsport Venues in the UK. With fast straights and flowing corners, it’s hosted some of the most iconic cars and drivers of the past century, and continues to host famous sprint events every year</p>
                </div>
                <p className={"main-track-main-desc-speedtag"}>Speed:</p>
                <Slider sx={{ width: 300 }} aria-label="Temperature" defaultValue={1} getAriaValueText={valuetext} valueLabelDisplay="auto" shiftStep={1} step={0.5} marks min={0.5} max={2} color={"primary"}/>
                <div className={"main-track-main-desc-buttons"}>
                    <button className={"mainbutton"} onClick={playfunc}>{VidPlay ? 'Start' : 'Pause'}</button>
                    <button className={"mainbutton"} onClick={resetfunc}>Reset</button>
                </div>
            </div>
            <img className={"main-track-main-startarrow"} src={startarrow} alt="Start position"/>
        </div>
    );
}

export default TrackMain;
import "./Track-Cars.css"
import {useState} from "react";
import { TrackCarsData } from "./Track-CarsData.tsx";
import * as TbIcons from "react-icons/tb";
import * as CgIcons from "react-icons/cg";

function TrackCars() {

    const [current,setslide] = useState(0);
    const [isSaved, setisSaved] = useState(false)

    const [activedesc,setactivedesc] = useState(false)

    const len = TrackCarsData.length;

    const nextslide = () => {
        setslide(current == len-1 ? 0 : current+1)
    }

    const prevslide = () => {
        setslide(current == 0 ? len-1 : current-1)
    }

    const showspecs = () =>{
        setactivedesc(!activedesc)
    }

    function handlesave(title: string,img: string,alt: string,color: string) {
        localStorage.setItem("Title", title)
        localStorage.setItem("Image", img)
        localStorage.setItem("Alt", alt)
        localStorage.setItem("Color", color)
        setisSaved(true)

        setTimeout(() => {
            setisSaved(false);
          }, 1000);
    }

    return (
        <div className={"main-track-cars"}>
            <h1 className={"main-track-cars-title"}>CARS AVAILABLE</h1>
            <div className={"main-track-cars-desc"}>
                <div className={"main-track-cars-desc-images"}>
                    <TbIcons.TbArrowBadgeLeft className={"main-track-cars-desc-images-left_arrow"} onClick={prevslide}/>
                    <TbIcons.TbArrowBadgeRight className={"main-track-cars-desc-images-right_arrow"} onClick={nextslide}/>
                    <button className="addbutton" onClick={() => {const savecar = document.getElementById('savecar'); savecar != null ? savecar.click() : ""}}>+</button>
                    <div className="main-track-cars-desc-slider">
                    {TrackCarsData.map((slide,index) => {
                        return (
                            <div className={index == current ? "main-track-cars-desc-slider-active" : "main-track1-cars-desc-slider-notactive"} key={index}>
                                {index === current && <img key={index} src={slide.image} alt={slide.alt} className={"main-track-cars-desc-slider-image"}/>}
                                {index === current && <div className={activedesc ? "main-track-cars-desc-specs-active" : "main-track-cars-desc-specs-notactive"}>
                                    <div className={"main-track-cars-desc-specs"}>
                                        <h2 style={{color: slide.color}}>{slide.title}</h2>
                                        <button id={"savecar"} className="mainbutton" onClick={() => handlesave(slide.title,slide.image,slide.alt,slide.color)}>+</button>
                                        <p>Engine - {slide.engine} </p>
                                        <p>Max speed - {slide.maxspeed}</p>
                                        <p>0-60 mph - {slide.zerotosixty}</p>
                                        <p>Weight - {slide.weight}</p>
                                    </div>
                                </div>}
                            </div>
                        )
                    })}
                    <button className={"main-track-cars-desc-infobutton"} onClick={showspecs}>INFO</button>
                    </div>
                </div>
            </div>
            <ol className="main-track-cars-index">
                <CgIcons.CgLoadbar className={current == 0 ? "main-events-index-active":"main-events-index-notactive"}/>
                <CgIcons.CgLoadbar className={current == 1 ? "main-events-index-active":"main-events-index-notactive"}/>
                <CgIcons.CgLoadbar className={current == 2 ? "main-events-index-active":"main-events-index-notactive"}/>
                <CgIcons.CgLoadbar className={current == 3 ? "main-events-index-active":"main-events-index-notactive"}/>
            </ol>
            {isSaved && (
                <div className="savedpopup">
                    <div className="savedpopup-content">
                        <h3>Saved to profile</h3>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TrackCars;

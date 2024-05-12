import { useState,useEffect } from "react";
import './EventsComp.css'
import { EventsData } from "./EventsData.tsx";
import * as TbIcons from "react-icons/tb";
import * as CgIcons from "react-icons/cg";


function Main() {

    const [current,setslide] = useState(0);

    const len = EventsData.length;

    const nextslide = () => {
        setslide(current == len-1 ? 0 : current+1)
    }

    const prevslide = () => {
        setslide(current == 0 ? len-1 : current-1)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setslide((current) => (current + 1) % EventsData.length);
        }, 6000);

        return () => clearInterval(intervalId);
    }, [EventsData.length]);

    useEffect( () =>{
        function ToEvents() {
            const eventsSection = document.getElementById('events');
            if (eventsSection != null) {
                eventsSection.scrollIntoView({behavior: 'smooth'});
            }
        }
        document.addEventListener('ToEvents', ToEvents);
        return () => {
            document.removeEventListener('ToEvents', ToEvents);
        };
    },[])

    return (
        <div className={"main-eventsComp"} id={"events"}>
            <TbIcons.TbArrowBadgeLeft className={"main-events-left_arrow"} onClick={prevslide}/>
            <TbIcons.TbArrowBadgeRight className={"main-events-right_arrow"} onClick={nextslide}/>
            <h1 className={"main-events-title"}>EVENTS</h1>
            {EventsData.map((slide,index) => {
                return (
                    <div className={index == current ? "main-events-image-active" : "main-hero-events-notactive"} key={index}>
                        {index === current && <img key={index} src={slide.image} alt={slide.alt} className={"main-events-image"}/>}
                        {index === current && <div className={"main-events-info"}>
                            <h2>{slide.title}</h2>
                            <p>{slide.desc}</p>
                        </div>}
                    </div>
                )
            })}
            <ol className="main-events-index">
                <CgIcons.CgLoadbar className={current == 0 ? "main-events-index-active":"main-events-index-notactive"}/>
                <CgIcons.CgLoadbar className={current == 1 ? "main-events-index-active":"main-events-index-notactive"}/>
                <CgIcons.CgLoadbar className={current == 2 ? "main-events-index-active":"main-events-index-notactive"}/>
            </ol>
        </div>
    );
}

export default Main;
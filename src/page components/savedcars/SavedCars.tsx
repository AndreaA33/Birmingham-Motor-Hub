import "./SavedCars.css"
import { useEffect, useState } from "react"

function SavedCars() {

    const [img,setImage] = useState("")
    const [alt,setAlt] = useState("")
    const [title,setTtle] = useState("")
    const [popup, setPopup] = useState(false)
    const [undopopup, setUndopopup] = useState(false)

    function redirectToTrack(){
        window.location.href = "/track1"
    }

    useEffect(() => {
        setImage(localStorage.getItem("Image") ?? "")
    
        setAlt(localStorage.getItem("Alt") ?? "")  
    
        setTtle(localStorage.getItem("Title") ?? "")

    }, []);

    function handleDelete() {
        setPopup(!popup)
        setUndopopup(true)

        setTimeout(() => {
            setUndopopup((prevUndopopup) => {
                if (prevUndopopup === true) {
                  localStorage.removeItem("Title");
                  localStorage.removeItem("Image");
                  localStorage.removeItem("Alt");
                  window.location.reload();
                }
                return false;
            });
        }, 3000);;
    }
    

    function handlepopup() {
        setPopup(!popup)
    }

    function handleundo(){
        setUndopopup(false);
    }

    return (
        <div className={"main-profile-savedcars"}>
            <h2 className={"main-profile-savedcars-title"}>Saved Cars</h2>
            <div className={"main-profile-details-savedcars-imgs"}>
                <div className={img != "" ? "main-profile-details-savedcars-imgs": "main-profile-details-savedcars-imgs-empty"}>
                    <div className={"main-profile-details-savedcars-imgs-container"}>
                        <button className="main-profile-details-savedcars-imgs-container-remove" onClick={handlepopup}>-</button>
                        <img className={"main-profile-details-savedcars-img"} src={img} alt={alt} onClick={redirectToTrack}/>
                        <div className={"main-profile-details-savedcars-cardets"}>
                            <h3 style={{color: localStorage.getItem("Color") ?? ""}}>{title}</h3>
                            <p>CURBOROUGH SPRINT COURSE</p>
                        </div>
                    </div>
                </div>
            </div>
            {popup && 
                <div className="popup-content">
                        <p>Are you sure you want to delete your {title}?</p>
                        <div className="popup-button-container">
                            <button className="confirmButton" onClick={handleDelete}>Yes</button>
                            <button className="cancelButton" onClick={handlepopup}>No</button>
                        </div>
                </div>
            }
            {undopopup && (
                <div className="undopopup" onClick={handleundo}>
                    <div className="undopopup-content">
                        <h3>Undo</h3>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SavedCars;
import NavBar from "../../page components/navbar/NavBar.tsx";
import SavedCars from "../../page components/savedcars/SavedCars.tsx";
import Car1 from "../../assets/car1.jpeg"
import "./Profile.css"
import { useState } from "react";

function Profile() {

    const [Image, setImage] = useState(Car1);

    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const imageData = reader.result;
            if (typeof imageData === 'string') {
                setImage(imageData);
            } else {
                console.error("");
            }
        }
        
        reader.readAsDataURL(file); 
    };

    return (
        <div className={"main-profile"}>
            <NavBar/>
            <h1 className={"main-profile-details-title"}>Profile</h1>
            <div className={"main-profile-details"}>
                <div className={"main-profile-details-maintag"}>
                    <img className={"main-profile-details-img"} src={Image} alt={"profile picture"}/>
                    <div className={"main-profile-details-profileImageoverlay"} onClick={() => {const updateinput = document.getElementById('uploadImage'); updateinput != null ? updateinput.click() : ""}}>Edit</div>
                    <input type="file" id="uploadImage" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange}></input>
                    <h2 className={"main-profile-details-name"}>{localStorage.getItem("Username")}</h2>
                    <button className="mainbutton">Share</button>
                </div>
                <SavedCars/>
            </div>
        </div>
    );
}

export default Profile;
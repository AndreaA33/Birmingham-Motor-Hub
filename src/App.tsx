import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./components/login/Login.tsx";
import Home from "./components/home/Home.tsx";
import Tracklist from "./components/trackslist/Tracklist.tsx"
import Track1 from "./components/track1/Track1.tsx";
import Profile from "./components/profile/Profile.tsx";

function App() {

  return (
    <div>
        <Router>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/tracklist"} element={<Tracklist/>}/>
                <Route path={"/track1"} element={<Track1/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App

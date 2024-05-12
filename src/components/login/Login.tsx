import './Login.css'
import { useState } from "react";
import bg1 from "../../assets/loginbg.jpg";

function Login() {

    const [Name,setName] = useState("")
    const [Username,setUsername] = useState("")
    const [Password,setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoginorReg,setisLoginorReg] = useState(true)


    function handleLogin() {
        try{
            if (Username == "" || Password == ""){
                throw new Error('Username or password cannot be empty');
            } else if (Username != localStorage.getItem("Username") || Password != localStorage.getItem("Password")){
                throw new Error('Invalid username or password');
            } else {
                window.location.href = '/home';
            }
        } catch (error: any) {
            setError(error.message)
        }
    }

    function handleflip() {
        const container = document.querySelector('.card-container');
        if (container != null){
            container.classList.toggle('flip');
            setisLoginorReg(!isLoginorReg);
            if (error != ""){
                setError("")
            }
        }
    }

    function handleRegister() {
        try{
            if (Username == "" || Password == "" || Name == ""){
                throw new Error('Name, Username or password cannot be empty');
            } else if (Username == localStorage.getItem("Username")){
                throw new Error('User already exists');
            } else {
                localStorage.setItem("Name",Name)
                localStorage.setItem("Username",Username)
                localStorage.setItem("Password",Password)
                window.location.href = '/home';
            }
        } catch (error: any) {
            setError(error.message)
        }

    }


    return (
        <div className="main-LogandReg-container">
            <img src={bg1}></img>
            <div className='card-container'>
                <div className={`flipper`}>
                    <div className="main-login-form">
                        <h2>Login</h2>
                        {error && <div className="main-error"><p>{error}</p></div>}
                        <input className={"main-input"} placeholder={"Username"} value={Username} onChange={(e) => setUsername(e.target.value)}/>
                        <input className={"main-input"} placeholder={"Password"} type="password" value={Password} onChange={(e) => setPassword(e.target.value)}/>
                        <div className="options">
                            <input type="checkbox" id="remember" name="remember"/>
                            <label>Remember me</label>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button onClick={handleLogin} className='main-login-button'>Login</button>
                        <p>Don't have an account? <button onClick={handleflip} className='main-LogandReg-container-alt'>Register</button></p>
                    </div>
                    <div className="main-register-form">
                        <h2>Register</h2>
                        {error && <div className="main-error"><p>{error}</p></div>}
                        <input className={"main-input"} placeholder={"Name"} value={Name} onChange={(e) => {setName(e.target.value)}}/>
                        <input className={"main-input"} placeholder={"Username"} value={Username} onChange={(e) => {setUsername(e.target.value)}}/>
                        <input className={"main-input"} placeholder={"Password"} type="password" value={Password} onChange={(e) => {setPassword(e.target.value)}}/>
                        <div className="options">
                            <input type="checkbox" id="remember" name="remember"/>
                            <label>Remember me</label>
                        </div>
                        <button className={"main-login-button"} onClick={handleRegister}>Register</button>
                        <p>Already have an account? <button onClick={handleflip} className='main-LogandReg-container-alt'>Login</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
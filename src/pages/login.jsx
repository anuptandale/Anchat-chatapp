import React from "react";
import Add from "../img/addavatar.png"
const Login = () =>{
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Anchat</span>
                <span className="title">Login</span>
                <form >
                    <input type="emial" placeholder="emial" />
                    <input type="password" placeholder="password" />
                    
                    <button>Sign In</button>
                    <p>You don't have an account? Register</p>
                </form>
            </div>
        </div>
    )
}

export default Login
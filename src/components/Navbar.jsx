import React from "react";
import Add from "../img/myimage.jpg"
const Navbar = ()=>{
    return (
        <div className="navbar">
            <span className="logo">
                Anchat
            </span>
            <div className="user">
                <img src={Add} alt="" />
                <span>Anup</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar
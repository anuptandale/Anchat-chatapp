import React from "react";
import Add from "../img/addavatar.png"
import attach from "../img/attached.png"
const Input = ()=>{
    return(
        <div className="input">
            <input type="text" placeholder="Type something..." />
            <div className="send">
                <img src={attach} alt="" />
                <input type="file" style={{display:"none"}} id="file" />
                <label htmlFor="file">
                    <img src={Add} alt="" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input
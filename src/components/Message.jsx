import React from "react";
import Add from "../img/friend.jpg"
const Message = ()=>{
    return(
        <div className="message owner">
            <div className="messageInfo">
                <img src={Add} alt="" />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src={Add} alt="" />

            </div>
        </div>
    )
}

export default Message
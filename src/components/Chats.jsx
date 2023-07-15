import React from "react";
import Add from "../img/friend.jpg"
const Chats = ()=>{
    return(
        <div className="chats">
            <div className="userChat">
                <img src={Add} alt="" />
                <div className="userChatInfo">
                    <span>Tanmay</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Chats
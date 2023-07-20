import React, { useContext } from "react";
import cam from "../img/video-camera.png"
import Add from "../img/add-group.png"
import More from "../img/more.png"
import Messages from "./Messages";
import Input from "./Input"
import { ChatContext } from "../context/ChatContext";

const Chat = ()=>{
    const{ data} = useContext(ChatContext);
    return(
        <div className="chat">
            <div className="chatinfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <img src={cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                    
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}

export default Chat;
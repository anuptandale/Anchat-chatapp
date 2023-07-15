import React from "react";
import Add from "../img/friend.jpg"
const Search = ()=>{
    return(
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="find a user" />
            </div>
            <div className="userChat">
                <img src={Add} alt="" />
                <div className="userChatInfo">
                    <span>Tanmay</span>
                </div>
            </div>
        </div>
    )
}

export default Search
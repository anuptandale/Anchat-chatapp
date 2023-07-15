import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { OAuthCredential, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState({});

    useEffect(()=>{ //weather we have user or not
        const unsub = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user); //if user found
            console.log(user);
        });
        return()=>{
            unsub();
        };
    },[]);
    return (
    <AuthContext.Provider value={{currentUser}}>
        { children }
    </AuthContext.Provider>//it means component can reach current user
    )
};

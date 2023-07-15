import React,{useState} from "react";
import Add from "../img/addavatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth ,getStorage} from "../firebase"
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const Register = () =>{
    const [err, setErr] = useState(false);
    const handleSubmit = async (e)=>{
        e.preventDefault(); //page is not getting refresh
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
        
        try{
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(

            (error) => {
                setErr(true);
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
                    await updateProfile(res.user,{
                        displayName: displayName,
                        photoURL: downloadURL
                    })
                });
            }
            );
        }catch(err){
            setErr(true);
        }
        
        
    }
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Anchat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit }>
                    <input type="text" placeholder="display name" />
                    <input type="emial" placeholder="emial" />
                    <input type="password" placeholder="password" />
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                    {err && <span>Something went wrong</span>}
                    <p>You do have an account? Login</p>
                </form>
            </div>
        </div>
    )
}

export default Register
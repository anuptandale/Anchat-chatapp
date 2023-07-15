import React,{useState} from "react";
import { useNavigate, Link} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"
const Login = () =>{
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
  
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
            
      } catch (err) {
        setErr(true);
      }
        
        
    };
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Anchat</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="emial" placeholder="emial" />
                    <input type="password" placeholder="password" />
                    
                    <button>Sign In</button>
                    <p>You don't have an account? <Link to="/register">Register</Link> </p>
                </form>
            </div>
        </div>
    )
}

export default Login
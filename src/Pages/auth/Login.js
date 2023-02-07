import React, { useState } from 'react'
import styles from  "./auth.css";
import loginImg from "../../assets/login.png";
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineGoogle} from "react-icons/ai";
import Card from '../../Components/Card/Card';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import {auth} from "../../firebase/config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../Components/loader/Loader';
const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  const navigate = useNavigate();   
  const LoginUser = (e) =>{
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    setIsLoading(false);
    toast.success("Login successful");
    navigate('/');
  })
  .catch((error) => {
    toast.error(error.message);
    setIsLoading(false);
  });
  }
  const provider = new GoogleAuthProvider();
  const loginGoogle = (e) => {
    signInWithPopup(auth, provider)
    .then((result) => {
    const user = result.user;
    toast.success("Login Success");
    navigate("/");
  }).catch((error) => { 
    toast.error(error.message);
  });
  };
  return (
    <>
    <ToastContainer/>
    {isLoading && <Loader/>}
    <section className={`container ${styles.auth}`}>
        <div className="img">
            <img src={loginImg} alt="" width={400}/>
        </div>
        <div className='card'>
        <div className='form'>
                <h2>Login</h2>
                <form onSubmit={LoginUser}>
                    <input type="text"  placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password"  placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className='--btn --btn-primary --btn-block' type='Submit'>Login</button>
                    <div className="links">
                        <Link to="/reset">Reset Password</Link>
                    </div>
                    <p>-- or --</p>
                </form>
                <button className='--btn --btn-primary --btn-block btn' onClick={loginGoogle}>
                <AiOutlineGoogle size={24} className="btn_icon"/> Login with Google
                    </button>
                    <span className="register">
                        <p>Don't Have a Account? </p>
                        <Link to="/register"> Register</Link>
                    </span>     
        </div>
        </div>
    </section>
    </>
  )
}

export default Login
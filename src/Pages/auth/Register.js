import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "./Login.css";
import styles from  "./auth.css";
import registerImg from "../../assets/register.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase/config";
import Loader from "../../Components/loader/Loader";
const Register = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [cPassword,setCPassword] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  const navigate = useNavigate();   
  const registerUser = (e) =>{
     e.preventDefault();
    if(password !== cPassword){
      toast.error("Password does not match");
    }  
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user; 
    console.log(user);
    setIsLoading(false);
    toast.success("User has been created");
    navigate("/login")
  })
  .catch((error) => {
    toast.error(error.message);
    setIsLoading(false);
  });
  };
  return (
    <>
    <ToastContainer/>
    {isLoading && <Loader/>}
    <section className='container'>
       <div className="card">
        <div className="form">
          <h2>Register</h2>
          <form onSubmit={registerUser}>
            <input type="text" placeholder='Email'  required  value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="password" placeholder='Confirm Password' required value={cPassword} onChange={(e) => setCPassword(e.target.value)}/>
            <button className='--btn --btn-primary --btn-block' type='Submit'>Register</button>
          </form>
          <span className='login'>
            <p>Already Have a Account ?</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
       </div>
       <div className="img">
        <img src={registerImg} alt="" width={500} />
       </div>
    </section>
    </>
  )
}

export default Register
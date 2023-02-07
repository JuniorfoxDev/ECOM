import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import resetImg from "../../assets/forgot.png"
import "./Login.css";
import styles from  "./auth.css";
const reset = () => {
  return (
    <section className='container'>
        <div className="img">
          <img src={resetImg} alt=""  width={400}/>
        </div>
        <div className="card">
          <div className="form">
            <h2>Reset Password</h2>
            <form>
            <input type="text" placeholder='Email' required/>
            <button className='--btn --btn-primary --btn-block'>Reset Password</button>
            </form>
            <div className="linkss">
              <Link className='color' to="/login"> - Login</Link>
              <Link to="/register" className='color'> - Register</Link>
            </div>
          </div>
        </div>
    </section>
  )
}

export default reset
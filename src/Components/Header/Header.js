import React, { useEffect, useState } from 'react';
import "./Header.css";
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {onAuthStateChanged, signOut} from "firebase/auth";
import {FaUserAlt} from "react-icons/fa";
import {auth} from '../../firebase/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../redux/slice/authSlice';
import ShowOnLoggedIn, { ShowOnLogOut } from '../hiddenLink/hiddenLink';

const cart = (
  <span className="cart">
          <Link to="/cart" className='link'>
            Cart
            <AiOutlineShoppingCart/>
            <p>0</p>
          </Link>
        </span>
);
const Header = () => {
  const [showMenu,setShowMenu] = useState(false);
  const [displayName,setdisplayName] = useState("");
  const  navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        if(user.displayName == null ){
          const u1 = user.email.substring(0,user.email.indexOf("@"));
          const userName = u1.charAt(0).toUpperCase()  + u1.slice(1);
          setdisplayName(userName);
        }else{
          setdisplayName(user.displayName);
        }
        setdisplayName(user.displayName);
        dispatch(SET_ACTIVE_USER({
          email : user.email,
          userName : user.displayName ? user.displayName : displayName,
          userID : user.uid,
        }))
      } else {
        setdisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  },[]);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };
  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success("Logout successfully");
      navigate('/login');
    }).catch((error) => {
      toast.error(error.message);
    });
  }
  return (
    <>
    <ToastContainer/>
    <header>
      <div className="header_container">
        <div className="logo">
          <Link to="/">
            <h2>E<span>Shop</span></h2>
          </Link>
        </div>
        <div className="center">
          <div className="admin">
            <Link to="/">
              <h2>Admin</h2>
            </Link>
          </div>
          <div className="home">
          <Link to="/">
              <h2>Home</h2>
            </Link>
          </div>
          <div className="Contact">
          <Link to="/contact">
              <h2>Contact Us</h2>
            </Link>
          </div>
        </div>
        <div className="right">
          <span className="links">
            <ShowOnLogOut>
            <Link to="/login" className='link'>Login </Link>
            </ShowOnLogOut>
            <ShowOnLoggedIn>
            <a href='#' className='link'>
              <FaUserAlt size={18}/> 
              Hi,{displayName}
            </a>
            </ShowOnLoggedIn>
            <ShowOnLogOut>
            </ShowOnLogOut>
            <ShowOnLoggedIn>
            <Link to="/orderHistory" className='link'>My Order</Link>
            </ShowOnLoggedIn>
            <ShowOnLoggedIn>
            <Link to="/" className='link' onClick={logoutUser}>Logout</Link>
            </ShowOnLoggedIn>
          </span>
          {cart}
        </div>
      </div>
    </header>
    </>
  )
}

export default Header
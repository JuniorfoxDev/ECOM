import React from 'react';
import "./Footer.css";
const date = new Date();
const year = date.getFullYear();
const Footer = () => {
  return (
    <div className='footer_container'>
      &copy; {year} All Rights Reserved. 
    </div>
  )
}

export default Footer
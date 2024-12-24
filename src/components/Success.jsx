import React from 'react';
import "./styles.css";
import SvgImg from "../assets/icon-success-check.svg";

export const Success = () => {
  return (
    <aside className='success-container'>
        <h3> <img xmlns="http://www.w3.org/2000/svg" src={SvgImg} alt="-"/> <span> Message Send!</span></h3>
        <p> Thankyou for completing the form. We'll stay in touch soon!</p>
    </aside>
  )
}

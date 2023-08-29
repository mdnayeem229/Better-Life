import React, { useState } from 'react';
import './Navbar.css';
import logo from '../images/images/smallnavlogo223x40.png';
const Navbar = () => {
  const [menu, nav] = useState (false);
  function toggle(){
    nav(!menu);
  }
  
  return (
  
    <div className="main-nav">
    <div className="logo">
    <img src={logo} alt=""/>
    </div>
    <div className="menu" onClick={toggle}> {menu ? ( <i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-bars"></i>)} </div>
    <nav className={menu ? 'nav active' : 'sidbar' }>
         <a href="">HOME</a>
<a href="#">APOINTMENT</a>
<a href="#">PRECIS ON PROGRAM</a>
<a href="#">MEN</a>
<a href="#">WOMEN</a>
<a href="#">FAQ</a>
<a href="#">TEAM</a>
<a href="#">STORE</a>
<a href="#">LIFESTYLE </a>
</nav>
</div>
)
}

export default Navbar












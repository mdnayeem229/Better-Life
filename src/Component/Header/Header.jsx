import React from 'react'
import './Header.css';
function Header() {
  return (
    <div className='header'>
      <div className="header-text">
       <p>CONSULTATION <span> 347.839.2984</span></p>
       </div>
       <div className="header-text">
       <p>Current patient <span> 347.839.2984</span></p>
       </div>
       <div className="header-text1">
       <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i class="fa-brands fa-youtube"></i></a>
       </div>
    </div>
  )
}

export default Header
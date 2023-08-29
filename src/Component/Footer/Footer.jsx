import React from 'react';
import './Footer.css';
import Img10 from '../images/images/BL_WhiteReversed_Hrz_Lg-e1573168840349.png';
function Footer() {
  return (
    <div className="Footer">
    <div class="age">
       <img src={Img10} alt=""/>
       <h2>Call today!  843-737-2597</h2>
       <div class="age-link">
       <a href=""><i class="fa-brands fa-facebook-f"></i>BetterLifeCaroulines</a>
       <a href=""><i class="fa-brands fa-instagram"></i>BetterLifeCaroulinesMD</a>
    </div>
    </div>
<div class="fotter">
    <p>COPYRIGHT 2022 BY DR. MICKEY BARBER'S BETTER LIFE</p>
</div>
    <div class="footer">
        <p>SITE DESIGN BY 12PT CREATIVE</p>
        <label for="">Service Area :</label>
        <select name="" id="">
            <option value="1">--Select City--</option>
            <option value="2">--Bangladesh--</option>
            <option value="3">--India--</option>
            <option value="4">--Nepal--</option>
            <option value="5">--Canada--</option>
            <option value="6">--Pakistan--</option>
            <option value="7">--Ganna--</option>
            <option value="8">--Brazil--</option>
            <option value="9">--Argentina--</option>
            <option value="10">--Japan--</option>
        </select>
    </div>
    </div>
  )
}

export default Footer
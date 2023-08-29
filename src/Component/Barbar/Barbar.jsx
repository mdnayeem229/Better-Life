import React from 'react';
import './barbar.css';
import Img4 from '../images/images/drmickeyprofilesmcircle.png'
function Barbar() {
  return (
    <div class="container">
    <div class="row justify-content-center makes">
        <div class="col-md-4 mt-4 mb-4 barber-1">
            <img src={Img4} className='img-fluid' alt=""/>
        </div>
<div class="col-md-8 mt-4 mb-4">
<div class="barber">
<h2>Meet Dr. Barber</h2>
<h3>CHIEF EXECUTIVE OFFICER/CHIEF MEDICAL OFFICER</h3>
<p>Dr. Mickey Barber is your secret to success. From the first minute you meet her, you know she cares more than any other doctor you’ve ever met. For more than 20 years, she has been helping men and women with age management, wellness and sexual health. She is constantly learning and growing, attending seminars and studying the latest techniques. She lives for that moment when her patients say, “Dr. Mickey, I couldn’t have done this without you.”

She has been where you are. In her mid-40s, she became very ill. Nothing worked doctors couldn't figure out why she felt 25 years older than her actual age. She finally took the bull by the horns and designed her own treatment program – the same treatment you will get at Better Life. Twenty years later, she feels better than ever and she has the expert knowledge born from her passion.</p>
<div class="barber-link">
   <button>MEET THE TEAM</button>
</div>
</div>
</div>
    </div>
</div>
  )
}

export default Barbar
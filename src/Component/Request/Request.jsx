import React from 'react'
import './Request.css';
import Img3 from '../images/images/appointmentrequest-ig.jpg';
function Request() {
  return (
    <section id="request">
    <div class="row justify-content-center">
        <div class="col-md-6">
    <div class="main-future request">
<h2>Request an appoinment</h2>
<p>If you're ready to live a more youthful, energetic better life, please register below to schedule a consultation and we’ll be in touch soon! It’s never too late, or too early.</p>
    </div>
    </div>
    </div>
    <div class="container">
        <div class="row">
<div class="main-request">
    <div class="request-1">
        <form action="">
            <input type="text" placeholder="*firstName"/>
            <input type="text" placeholder="*LastName"/>
            <input type="text" placeholder="*Email"/>
            <input type="text" placeholder="*Phone"/>
            <button class="request-link" >Submit</button>
        </form>
       
    </div>
</div>
</div>
</div>
<div class="container">
    <div class="row">
<div class="main-request">
<div class="request-1 request-2">
    <form action=""/>
        <input type="text" placeholder="*firstName"/>
        <input type="text" placeholder="*LastName"/>
        <input type="text" placeholder="*Email"/>
        <input type="text" placeholder="*Phone"/>
        <button class="request-link" >Submit</button>
    <from/>
</div>
</div>
</div>
</div>
<div className="request-img">
<img src={Img3} alt="" />
</div>
</section>
  )
}

export default Request
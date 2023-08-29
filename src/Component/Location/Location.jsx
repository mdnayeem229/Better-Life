import React from 'react';
import './Location.css';
import Img7 from '../images/images/BL_Homepage_31-1280x586.jpg';
import Img8 from '../images/images/BL_Homepage5.jpg';
import Img9 from '../images/images/BL_Homepage.jpg';
function Location() {
  return (
<div className="Location">
    <div class="boost-2">
    <img src={Img7} alt=""/>
    </div>
<div id="location">
    <div class="location">
            <div class="row justify-content-center makes">
                <div class="col-md-6">
                    <h2>Locations</h2>
                    <p>With our spa like offices in Charleston, SC and Charlotte, NC, our team is ready to serve you. Schedule your consultation today!</p>
                </div>
            </div>
        </div>
    </div>
<div class="container">
    <div class="row justify-content-between">
        <div class="col-md-6">
            <div class="location-1">
            <img src={Img8} className='img-fluid' alt=""/>
            <h2>Charleston, SC</h2>
<p>260 W Coleman Blvd.<br/>Mt. Pleasant, SC 29464</p>
<h4>CONSULTATIONS: <span/>843-737-2597<span/></h4>
    <h4>EXISTING PATIENTS: <span/> 843-577-8484<span/></h4>
        </div>

    </div>
    <div class="col-md-6 mt-4">
        <div class="location-1">
        <img src={Img9} className='img-fluid' alt=""/>
        <h2>Charleston, NC</h2>
<p>260 W Coleman Blvd.<br/>Mt. Pleasant, SC 29464</p>
<h4>CONSULTATIONS: <span/>843-737-2597<span/></h4>
<h4>EXISTING PATIENTS: <span/> 843-577-8484<span/></h4>
    </div>
</div>
</div>
</div>
</div>
  )
}

export default Location
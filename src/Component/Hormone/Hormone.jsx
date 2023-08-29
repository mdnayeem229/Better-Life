import React from 'react';
import './Hormone.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Img5 from '../images/images/hormone-replacement-doctor-mickey-barber-1280x586.jpg';
function Hormone() {
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", padding: '1rem', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px' }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    1: <Arrow />,
    2: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        }
      },
      
    ]
  };


  return (
    <div className="hormone1">
    <div class="barber-2">
    <img src={Img5} alt=""/>
</div>
<div class="row justify-content-center makes">
    <div class="col-md-6">
        <div class="hormone">
        <h2>Hormone Replacement?</h2>
        <p>Hormones affect nearly every aspect of your emotional, physical and psychological development. This can include everything from how well you sleep, to how you deal with stress, to how alert you are to how happy you are on a regular basis. The body relies on hormones for nearly every bodily function. As you age, your hormone levels tend to decline – we can bring them back up to a healthy balance so you look, feel and perform your best.</p>
</div>
</div>
</div>
<div className="mainSlider">
<div className="container">
<Slider {...settings}>
      <div className='carou1'>
        <h2>Patient Feedback</h2>
        <p>“Before Better Life Carolinas, I Lacked The Energy, Concentration, And Sleep Necessary For Me To Effectively And Efficiently Run My Company. The Transformation I've Felt Over The Last Year Has Truly Been Life-Changing, Improving My Productivity As Well As My Overall Health. Thank You Dr. Barber!”<br />

— John Adair, President, Endeavor Insurance Services —</p>
      </div>
      <div className='carou1'>
        <h2>Patient Feedback</h2>
        <p>“Before Better Life Carolinas, I Lacked The Energy, Concentration, And Sleep Necessary For Me To Effectively And Efficiently Run My Company. The Transformation I've Felt Over The Last Year Has Truly Been Life-Changing, Improving My Productivity As Well As My Overall Health. Thank You Dr. Barber!” <br />

— John Adair, President, Endeavor Insurance Services —</p>
      </div>
  
     
    </Slider>
  </div>
</div>
</div>


  )
}

export default Hormone
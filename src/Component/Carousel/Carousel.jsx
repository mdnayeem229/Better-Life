import React from 'react';
import './Carousel.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Img11 from '../images/images/better-life-carolinas-precision-program-btn.jpg';
import Img12 from '../images/images/gainswave-btn (1).jpg';
import Img13 from '../images/images/viveve-provider-charleston-better-life-carolinas.jpg';

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

function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
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
    <div className="container">
    <Slider {...settings}>
      <div className='carou'>
        <img src={Img11} alt="" />
      </div>
      <div className='carou'>
        <img src={Img12} alt="" />
      </div>
      <div className='carou'>
        <img src={Img13} alt="" />
      </div>
      <div className='carou'>
        <img src={Img11} alt="" />
      </div>
      <div className='carou'>
        <img src={Img12} alt="" />
      </div>
      <div className='carou'>
        <img src={Img13} alt="" />
      </div>
     
    </Slider>
  </div>
  )
}

export default Carousel




import React from "react";
import Slider from "react-slick";



 class AutoPlay extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      
    };
    return (
      <div className={'slider-container'}>
        {/* <h2>Auto Play</h2> */}
        <Slider {...settings}>
          <div>
          <img src={require('./empty-image1.png')} />
          </div>
          <div>
          <img src={require('./empty-image1.png')} />
          </div>
          <div>
          <img src={require('./empty-image1.png')} />
          </div>
          <div>
          <img src={require('./empty-image1.png')} />
          </div>
          <div>
          <img src={require('./empty-image1.png')} />
          </div>
          <div>
          <img src={require('./empty-image1.png')} />
          </div>
        </Slider>
      </div>
    );
  }
}
export default AutoPlay;
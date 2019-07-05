import React from "react";
import Slider from "react-slick";

class AutoPlay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const kithouse = process.env.PUBLIC_URL + "/kithouse.jpg";
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className={"slider-container"}>
        {/* <h2>Auto Play</h2> */}
        <Slider {...settings}>
          {this.props.data.map(item => (
            <div>
              <img src={item.image} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
export default AutoPlay;

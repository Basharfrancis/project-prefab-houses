import React from "react";
import Slider from "react-slick";

class AutoPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      data:[],
      loading: true

    }
  }
  async componentDidMount() {
    const response = await fetch(`http://localhost:8000/api/users/slider`);
    const json = await response.json();
    this.setState({ 
      data: json.data,
      loading: false


     });
    // console.log(this.state.data);
  }

  render() {
    // const kithouse = process.env.PUBLIC_URL + "/kithouse.jpg";
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
    const loading = this.state.loading;
    return (
      <div className={"slider-container"}>
        {
        loading ? <div>...loading</div> : (
          
         <Slider {...settings}>
          {this.state.data.map(item => (
            <div>
              <img src={"http://localhost:8000/"+item.image} />
            </div>
          ))}
        </Slider>
        )}
      </div>
    );
  }
}
export default AutoPlay;

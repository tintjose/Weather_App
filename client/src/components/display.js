import React from 'react';
import DisplayTemp from './displayTemp';
import Loading from './loading';
import Slider from "react-slick";
//background: #9ACD32;
class Display extends React.Component{

  render(){
    //carousel react-slick
    var settings = {
      className: "center",
     centerMode: false,
     infinite: true,
     centerPadding: "1px",
     slidesToShow: 3,
     speed: 1000,
     autoplaySpeed:6000,
     autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            className: "center",
           centerMode: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            className: "center",
           centerMode: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            className: "center",
           centerMode: false,
          }
        }
      ]
    };
    let props=this.props;
    if(this.props.city.length<=0){
      return(
        <div>
        <Loading />
        </div>
      );
    }
    else{
//CHECK OUT ALL THE 5 DAYS DISPLAYED WEATHER
//let weather=this.props.weather;
    return(
<div>
      <Slider {...settings}>

      <div className="weather-card">
<DisplayTemp  weather={props.weather[0]} city={props.city}/>

      </div>
      <div className="weather-card">
<DisplayTemp  weather={props.weather[1]} city={props.city}/>

      </div>
      <div className="weather-card">
<DisplayTemp  weather={props.weather[2]} city={props.city}/>

      </div>
      <div className="weather-card">
<DisplayTemp  weather={props.weather[3]} city={props.city}/>

      </div>
      <div className="weather-card" id="w4">
<DisplayTemp  weather={props.weather[4]} city={props.city}/>

      </div>
      <div className="weather-card">
<DisplayTemp  weather={props.weather[5]} city={props.city}/>

      </div>

       </Slider>
       </div>
    );
      }
  }
}
export default Display;

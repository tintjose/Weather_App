import React, { Component } from 'react';
import Header from './header';
import '../assets/styles/weather.css';
import Search from './search';
import Display from './display';
import {requestWeather} from '../api';
//const url="https://www.metaweather.com/api/location/";

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state={
      city:'',
      weather:[]

    };
    this.handleCity=this.handleCity.bind(this);

  }

componentDidMount(){
  let woeid=Number(this.props.location.pathname.slice(9));

  requestWeather(woeid).then(res=>{
    this.setState({
      city:res.data.title,
      weather:res.data.consolidated_weather
    });
  });
}
handleCity(woeid){
  requestWeather(woeid).then(res=>{
    this.setState({
      city:res.data.title,
      weather:res.data.consolidated_weather
    });
  });
}


  render() {
    let state=this.state;
    return (
      <div className="">
        <Header history={this.props.history} />
        <div className="search-holder ">
        <Search Tag="weather" history={this.props.history} handleCity={this.handleCity} />
        </div>
        <h3 className="weather-city "> {this.state.city}</h3>
        <div className="">
        <Display weather={state.weather} city={state.city} />
      </div>
      </div>
    );
  }
}

export default Weather;

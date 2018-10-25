import React from 'react';
class DisplayTemp extends React.Component{
  render(){
    if(this.props.city.length<=0){
      return;
    }
    else{
      let weather=this.props.weather;
      return(
        <div>
        <h3>
        {weather.applicable_date}
        </h3>
        <h3>
        {weather.weather_state_name}
        </h3>
        <div>
        <h3 className="weather-report-degree max">Max_Temp :
                {Math.round(weather.max_temp * 9 / 5 + 32)}&deg;F
              </h3>
              <h3 className="weather-report-degree min"> Min_Temp :
                {Math.round(weather.min_temp * 9 / 5 + 32)}&deg;F
              </h3>
            </div>
        </div>
      );
    }
  }
}
export default DisplayTemp;

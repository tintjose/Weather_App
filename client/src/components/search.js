import React from 'react';
import '../assets/styles/search.css';

import { requestCity, requestWeather } from '../api';
//import SearchError from './SearchError';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      woeid: 0,
      cities: [],
      query: false,
      error: false,
      weather: [],
      city: ''
    };
    this.onKeyPress = this.onKeyPress.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCity = this.handleCity.bind(this);
  }



  handleCity(woeid) {
    requestWeather(woeid).then(res => {
      this.setState({
        city: res.data.title,
        weather: res.data.consolidated_weather
      });
    });
  }

  handleSubmit() {
    if (this.state.title === '') return null;

    // setTimeout is a temproary fix to deal with async issues with update(field)
    setTimeout(() => {
      if (this.state.woeid > 0) {
        this.setState({
          error: false
        });
          //From ---> from home.js
        if (this.props.From === 'background') {
          this.handleCity(this.state.woeid);
          setTimeout(() => {
            this.props.history.push({
              pathname: `/weather/${String(this.state.woeid)}`
            });
          }, 500);
        } else {
          this.props.handleCity(this.state.woeid);
          this.props.history.push({
            pathname: `/weather/${String(this.state.woeid)}`
          });
        }
      } else {
        this.setState({
          error: true
        });
      }
    }, 500);
  }

  update(field) {
    return e => {
      let currentValue = e.currentTarget.value;
      this.setState({
        [field]: e.currentTarget.value,
        queryIsActive: true
      });

      if (currentValue.length > 3) {
        requestCity(currentValue).then(res => {
          let cities = [];
          for (let i = 0; i < 8 && i < res.data.length; i++) {
            cities.push(res.data[i].title);
          }
          let woeid = cities[0] ? res.data[0].woeid : 0;
          this.setState({
            cities,
            woeid
          });
        });
        // clear the cities and currentWoeId if no match
      } else {
        if (this.state.woeid !== 0) {
          this.setState({
            cities: [],
            woeid: 0
          });
        }
      }
    };
  }
  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }
  render() {
    return (
      <div
        id="weatherForm"
        className={'search-' + this.props.Tag}
        onSubmit={this.handleSubmit}
      >
        <div className={'search-adaptive-' + this.props.Tag}>
          <input
            className={'search-text-' + this.props.Tag}
            type="text"
            placeholder="Enter city ..."
            value={this.state.title}
            onChange={this.update('title')}
            onKeyPress={this.onKeyPress}
          />
          <input
            className={'search-button-' + this.props.Tag}
            type="submit"
            value="requestWeather"
            onClick={this.handleSubmit}
          />
        </div>

      </div>
    );
  }
}

export default Search;

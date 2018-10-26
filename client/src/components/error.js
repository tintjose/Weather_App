import React, { Component } from 'react';
import '../assets/styles/search.css';

class Error extends Component {
  render() {
    if (this.props.err) {
      return <div className="error">Sorry, we couldnt find the city from Database, Please look another city</div>;
    } else {
      return <div />;
    }
  }
}

export default Error;

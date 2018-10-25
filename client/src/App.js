import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Weather from './components/weather';
import Home from './components/home';
//import Particles from 'react-particles-js';


class App extends React.Component {
  render() {
    return (
      <div >


      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/weather/:woeid" component={Weather} />

        </Switch>
      </HashRouter>

      </div>
    );
  }
}

export default App;

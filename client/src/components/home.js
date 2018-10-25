import React from 'react';
import '../assets/styles/home.css';

import Header from './header';
import Search from './search';
import BackgroundSlideshow from 'react-background-slideshow';


import img1 from '../assets/images/backlit-beauty-breathtaking-267151.jpg';
import img2 from  '../assets/images/black-and-white-clear-cool-459451.jpg';
import img3 from '../assets/images/black-and-white-cold-environment-796563.jpg';
import img4 from '../assets/images/blur-bokeh-calamity-725876.jpg';

class Home extends React.Component {
  render() {

    return (
      <div>

        <Header history={this.props.history} />

        <div className="home-name">
        <BackgroundSlideshow className="img" images={[ img1, img2, img3, img4 ]} />


        <div className="titleMessage">
        <div className="heading">
          <p className="main">check out the weather!</p>
          <p className="sub">
          <Search

            Tag="background"
            From="background"
            history={this.props.history}  />
            </p>
        </div>
        </div>
        </div>



  </div>




    );
  }
}

export default Home;

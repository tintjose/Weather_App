import React from 'react';
import '../assets/styles/header.css';
import {Link} from 'react-router-dom';
class Header extends React.Component{
render(){
  return(
    <div className="header">
        <Link to="/">
          <div className="header-name">Tintu Jose</div>
        </Link>
      </div>
  );

}

}
export default Header;

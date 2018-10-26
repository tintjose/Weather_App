import React from 'react';
import sn from '../assets/img/sn.png';
import sl from '../assets/img/sleet.png';
import h from '../assets/img/h.png';
import t from '../assets/img/t.png';
import hr from '../assets/img/hr.png';
import lr from '../assets/img/lr.png';
import s from '../assets/img/s.png';
import hc from '../assets/img/hc.png';
import lc from '../assets/img/lc.png';
import c from '../assets/img/c.png';
class WeatherImg extends React.Component{
  render(){
    let wimg=this.props.wimg;
    if(wimg==='sn'){
      return <img className="wimg" src={sn} alt="snow" />;
    }
    else if(wimg==='sl'){
      return <img className="wimg" src={sn} alt="sleet" />;
    }
    else if(wimg==='h'){
      return <img className="wimg" src={h} alt="hail" />;
    }
    else if(wimg==='t'){
      return <img className="wimg" src={t} alt="thunderstorm" />;
    }
    else if(wimg==='hr'){
      return <img className="wimg" src={hr} alt="heavy rain" />;
    }
    else if(wimg==='lr'){
      return <img className="wimg" src={lr} alt="light rain" />;
    }
    else if(wimg==='s'){
      return <img className="wimg" src={s} alt="showers" />;
    }
    else if(wimg==='hc'){
      return <img className="wimg" src={hc} alt="heavy cloud" />;
    }
    else if(wimg==='lc'){
      return <img className="wimg" src={lc} alt="light cloud" />;
    }
    else if(wimg==='c'){
      return <img className="wimg" src={c} alt="clear" />;
    }
  }
}
export default WeatherImg;

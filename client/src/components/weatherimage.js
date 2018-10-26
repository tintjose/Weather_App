import React from 'react';
import sn from '../assets/img1/sn.svg';
import sl from '../assets/img1/sl.svg';
import h from '../assets/img1/h.svg';
import t from '../assets/img1/t.svg';
import hr from '../assets/img1/hr.svg';
import lr from '../assets/img1/hr.svg';
import s from '../assets/img1/s.svg';
import hc from '../assets/img1/hc.svg';
import lc from '../assets/img1/lc.svg';
import c from '../assets/img1/c.svg';
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

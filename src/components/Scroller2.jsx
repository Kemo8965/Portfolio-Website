import React, { Component } from 'react'
import {Link} from 'react-scroll'
import Lottie from 'react-lottie';
import animationData from '../components/lotties/scroll-down-animation.json';


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
  };
export default class header extends Component {
   
      
    render() {
        return (
            <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
 
          <li><Link  to="rates" spy={true} smooth={true} delay={3}>
                         <Lottie 
                          options={defaultOptions}
                          height={100}
                          width={50}
                          />
              </Link></li>
                     </ul>
        )
    }
}
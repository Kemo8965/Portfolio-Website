/* This example requires Tailwind CSS v2.0+ */

import React, {useState,useEffect, Fragment} from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CaseStudies from '../components/CaseStudies'
import Footer from '../components/Footer'
import { css, cx } from '@emotion/react'
import CTA from '../components/CTA';
import Gallery from '../components/Gallery';
import Scroller from '../components/Scroller'
import Lottie from 'react-lottie';
import animationData from '../components/lotties/mobile-payment.json';
import { Parallax } from 'react-parallax';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
  preserveAspectRatio: "xMidYMid slice"
  }
};

const override = css`
  display: block;
  margin: 0 auto;
  justify-items: center;
  top: 310px;
  border-color: red;
`;

const img1=`${process.env.PUBLIC_URL + '/assets/images/guy2.jpg'}`

export default function Example() {
 

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    
    setTimeout(()=>{
    setLoading(false)
    }, 2000)

  },[])

  return (
    <div>
       

      
      <div className=" lg:h-100 h-full lg:w-full w-full lg:bg-white text-gray-900 lg:mb-12 text-left" >
       
                                
            
          <div className="grid lg:grid-cols-2 grid-cols-1 ">
                

                <div className="lg:pt-8 lg:mt-10 lg:text-6xl bg-white text-2xl font-bold  ">
                  <h1 className="lg:text-7xl text-3xl py-8 text-gray-700 mx-8 mb-4 font-serif">
                  Expressing Company Identity through
                  </h1>

                  <h2  className="lg:text-4xl text-xl text-gray-500 mx-8">UI/UX Design, Branding and Motion Graphic Design</h2>

                  <Scroller/>
                </div>

              <div>
                <Parallax className="lg:object-cover mt-10 h-72 object-cover my-5  lg:w-full lg:h-100 lg:pb-4" bgImage={img1} >
                    <h1 className="lg:pt-96 mx-8 lg:mr-60 pt-52 text-5xl text-white font-bold">
                     I'm Kondwani
                    </h1>
              </Parallax>
                </div>

       </div>
            
        
        
    </div>

         <CaseStudies/>
          <CTA/>
          <Footer/>


    
   
  
    </div>
  )
}
 
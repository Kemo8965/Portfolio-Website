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
       

      
      <div className=" xl:h-100 h-full  w-full lg:bg-white text-gray-900" >
       
                        
   
    <Popover className="relative  overflow-hidden ">
      {({ open }) => (
        <>

        
        
          <div className="max-w-6xl mx-auto ">
            <div className="relative  pb-4  sm:pb-16 md:pb-20 lg:max-w-lg lg:w-full lg:pb-28 xl:pb-32">
          
            <div className="grid xl:grid-cols-2 grid-cols-1">
              
              <div>
              <main className="py-2  lg:mt-2 mt-6 lg:mt-2 rounded-md px-4 bg-none">
                
                <div className="sm:text-left text-left">
                  <h1 className="text-2xl lg:text-2xl  font-bold lg:text-gray-900 sm:text-xl md:text-2xl pb-4 mt-4 lg:pb-4">
                    <span className="filter sepia-10 lg:text-gray-600 ">Kondwani Mwale</span>

                  </h1>

                  <p className="text-6xl  mx-auto  font-serif lg:text-gray-900 sm:text-2xl lg:text-7xl">
                    <span className="text-red-600 ">Expressing   </span>
                   
                    <span className="text-blue-900"> Company Identity through </span>
                   
                  </p>

                  <p className="mt-8 text-base font-semibold   text-gray-600 sm:mt-5 text-2xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
                UX/UI Design , Branding, Motion Design
                  </p>
                  <div className="mt-12 lg:ml-0 ml-28   sm:mt-8 sm:inline-flex sm:justify-center lg:justify-start">
                    
                      <a
                        href="#"
                        
                       className="lg:w-1/2 lg:h-full h-10 w-1/2  flex bg-none items-center justify-center  py-8 border border-transparent text-base font-medium rounded-md text-white  md:py-4 md:text-lg md:px-10"
                      >
                        <Scroller/>
                        
                      </a>  
                      
                         
                  </div>


                 
                 

                    
                </div>
              <div>
                
              </div>
                
              </main>

              </div>

              <div className="lg:ml-20 lg:h-80 h-auto">
              <Lottie 
                          options={defaultOptions}
                          height={600}
                          width={800}
                          />
              </div>

            </div>
                
              
              
            </div>

            
          </div>
          <CaseStudies/>
          <CTA/>
          <Footer/>
          
        </>
      )}
    </Popover>
    </div>

      


    
   
  
    </div>
  )
}
 
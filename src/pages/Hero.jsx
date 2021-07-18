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

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

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
       

      <div className=" lg:h-100 h-72  w-full "  style={{ background: "url('../assets/images/hero12.jpg')  no-repeat center / cover "}}>
    <Popover className="relative  overflow-hidden ">
      {({ open }) => (
        <>
        
          <div className="max-w-7xl mx-auto ">
            <div className="relative z-10 pb-4  sm:pb-16 md:pb-20 lg:max-w-lg lg:w-full lg:pb-28 xl:pb-32">
            
            
                
              <main className="py-10 lg:mt-2 mt-60 lg:mt-20 rounded-md px-8 bg-none">
                <div className="sm:text-left text-left">
                  <h1 className="text-2xl lg:text-3xl  font-bold text-gray-900 sm:text-xl md:text-2xl pb-4 mt-4 lg:pb-10">
                    <span className="filter sepia-10 block xl:inline lg:text-gray-600  text-gray-600">Kondwani Mwale</span>

                  </h1>

                  <h3 className="text-2xl  font-bold text-gray-900 sm:text-2xl lg:text-4xl">
                    <span className="block  xl:inline">Expressing </span>{' '}
                    <span className="block xl:inline">Company Identity through</span>
                  </h3>

                  <p className="mt-3 text-base font-semibold  text-gray-800 sm:mt-5 text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
                UX/UI Design , Branding, Motion Design
                  </p>
                  <div className="mt-4  sm:mt-8 sm:inline-flex sm:justify-center lg:justify-start">
                    
                      <a
                        href="/Contact"
                        
                        className="lg:w-full w-3/4 flex bg-gray-800 items-center justify-center  py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        Get in touch
                      </a>     
                  </div>
                 

                    
                </div>
              </main>
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
 
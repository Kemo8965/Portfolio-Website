import React, {useState,useEffect, Fragment} from 'react'
import { css, cx } from '@emotion/react'
import HashLoader from "react-spinners/HashLoader";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {  ArrowCircleLeftIcon, ArrowCircleDownIcon,  ArrowCircleRightIcon,AcademicCapIcon, DesktopComputerIcon  } from '@heroicons/react/outline'
import { Parallax } from 'react-parallax';
import Scroller from '../components/Scroller'
import Hobbies from '../components/Hobbies';
import Footer from '../components/Footer';

const override = css`
  display: block;
  margin: 0 auto;
  justify-items: center;
  top: 310px;
  border-color: red;
`;

const img1=`${process.env.PUBLIC_URL + '/assets/images/kdm3.jpg'}`
const img2=`${process.env.PUBLIC_URL + '/assets/images/clock.jpg'}`


const About = () => {
    const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    
    setTimeout(()=>{
    setLoading(false)
    }, 4000)

  },[])

    return (
        
     <div>
       <div className="grid lg:grid-cols-2 grid-cols-1">
        <div>
        <Parallax className="lg:object-cover mt-10 h-72 object-cover   lg:w-full lg:h-100 lg:pb-1" bgImage={img1} >
            <h1 className="lg:pt-96 lg:mr-60 pt-52 text-5xl text-white font-bold">
              About Me
            </h1>
       </Parallax>
        </div>

        <div className="lg:pt-60 lg:text-7xl bg-gray-300 text-2xl font-bold lg:h-100 h-72 ">
          <p>
            Here's a snippet of Kondwani's life
          </p>

          <Scroller/>
        </div>
       </div>

       <div  id="case" className="lg:pt-12 pt-8">
         <h1 className="lg:text-3xl text-xl text-left ml-6 lg:ml-20 lg:pb-5 font-bold ">About Kondwani</h1>
       </div>
       
       <div  className="grid lg:grid-cols-2 grid-cols-1 lg:pt-5 lg:mt-4 pt-0">
         <div className="lg:h-100 h-full w-full bg-white text-black lg:order-2 order-last"  style={{ background: "url('../assets/images/kdm4.jpg') no-repeat center / cover"}}>
           
         </div>

         <div className="lg:h-100 h-full w-full bg-gray-900 text-white">
            <h1 className="lg:pt-40 pt-20 font-firma lg:text-2xl text-xl lg:mr-5">IT Specialist. Software Enthusiast. Creative.</h1>

            <p className="text-left lg:ml-16 pt-4 px-4">
             Kondwani is a creative professional working
             in the fields of software development,
             design and creative direction.
            </p>

            <p className="text-left lg:ml-16 pb-4 pt-4 px-4">
              As a software developer, Kondwani has been involved
              in the development of some projects such as:

              <li>A Permit Tracker designed to help keep track of the status of various permits from start to finish. </li>

              <li>A Consultants Portal designed to help keep track of consultations at any given time from verious departments 
                and produce daily, weekly monthly or quarterly reports as amd when needed. </li> 

                <li>A Dairy Information Management System designed to help farmers keep consistent records 
                  conveniently and produce reports as and when needed. </li>

            </p>
         </div>

       </div>

        <div >
        <div className="pb-2 ">
          <Parallax className="lg:object-cover mt-10 h-40 object-cover  order-first  lg:w-full lg:h-60 lg:pb-0" bgImage={img2}>
          <h3 className="lg:pt-10  pt-4 text-2xl lg:tracking-wider text-gray-500 font-bold text-left lg:ml-20 ml-8">
                My
            </h3>
         <h1 className="pt-8  lg:text-7xl text-3xl lg:tracking-wide text-gray-800 font-bold ml-4 text-left lg:ml-20 ml-8">
           Timeline
          </h1>
          </Parallax>
           
           </div>

        <Parallax  className="lg:object-cover mt-0 h-500 object-contain text-left  lg:w-full lg:h-350 lg:pb-8" >
            <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(50, 65, 75)', color: 'gray-100' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(50, 65, 75)' }}
    date="2021 - present"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={< DesktopComputerIcon />}
  >
    <p className="text-gray-50">
    <h3 className="vertical-timeline-element-title text-xl text-blue-400">IT Professional</h3>
    <h4 className="vertical-timeline-element-subtitle">Livestock Services Cooperative Society. Lusaka, ZM</h4>
       <li>Software Development</li>
       <li>Network Infrastructure & Topology Management</li>
       <li>Cyber Security Management</li>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - present"
    iconStyle={{ background: 'rgb(50, 65, 75)', color: '#fff' }}
    icon={< DesktopComputerIcon />}
  >
    <h3 className="vertical-timeline-element-title text-xl text-blue-500">Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Lusaka, ZM</h4>
    <p>
       User Experience,
       User Interface, Back-end Development in Express.js,
       Front-end Development in React.js, Angular.js and Nuxt.js
    </p>
  </VerticalTimelineElement>

  
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={< AcademicCapIcon />}
  >
    <h3 className="vertical-timeline-element-title text-xl text-blue-500">Bachelor's Degree in Computer Science </h3>
    <h4 className="vertical-timeline-element-subtitle">Lusaka, ZM</h4>
    <p>
    Graduated with a Bachelor's Degree in Computer Science from The University of Zambia.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(50, 65, 75)', color: 'gray-100' }}
    date="2018"
    iconStyle={{ background: 'rgb(50, 65, 75)', color: '#fff' }}
    icon={< AcademicCapIcon />}
  >
    
    <p className="text-gray-50">
    <h3 className="vertical-timeline-element-title text-xl text-blue-400">CCNA Certification </h3>
    <h4 className="vertical-timeline-element-subtitle">Lusaka, ZM</h4>
    Awarded the CCNA Certificate for completion of the Networking Course issued by CISCO.

    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<AcademicCapIcon />}
  >
    <h3 className="vertical-timeline-element-title text-xl text-blue-500">Graduated from Mpelembe Secondary School</h3>
    <h4 className="vertical-timeline-element-subtitle">Kitwe, ZM</h4>
    <p>
      Completed 12th Grade from Mpelembe Secondary School 
      in Kitwe, Copperbelt province with a full Certificate.
    </p>
  </VerticalTimelineElement>
 
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={< ArrowCircleDownIcon />}
  />
</VerticalTimeline>     
         </Parallax>    

        </div>
        <Hobbies/>

        <Footer/>
        
     </div>
                 


       
      
        
    )
}

export default About

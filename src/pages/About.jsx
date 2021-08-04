import React, {useState,useEffect, Fragment} from 'react'
import { css, cx } from '@emotion/react'
import HashLoader from "react-spinners/HashLoader";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {  ArrowCircleLeftIcon, ArrowCircleDownIcon,  ArrowCircleRightIcon } from '@heroicons/react/outline'
import { Parallax } from 'react-parallax';
import Scroller from '../components/Scroller'

const override = css`
  display: block;
  margin: 0 auto;
  justify-items: center;
  top: 310px;
  border-color: red;
`;

const img1=`${process.env.PUBLIC_URL + '/assets/images/guy2.jpg'}`
const img2=`${process.env.PUBLIC_URL + '/assets/images/color4.jpg'}`

const About = () => {
    const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    
    setTimeout(()=>{
    setLoading(false)
    }, 3000)

  },[])

    return (
        
     <div>
       <div className="grid lg:grid-cols-2 grid-cols-1">
        <div>
        <Parallax className="lg:object-cover mt-10 h-72 object-cover my-5  lg:w-full lg:h-100 lg:pb-4" bgImage={img1} >
            <h1 className="lg:pt-96 lg:mr-60 pt-52 text-5xl text-white font-bold">
              About Me
            </h1>
       </Parallax>
        </div>

        <div className="lg:pt-60 lg:text-7xl bg-red-100 text-2xl font-bold  ">
          <p>
            Here's a snippet into my life
          </p>

          <Scroller/>
        </div>
       </div>
       
        <div >
        <div id="case" className="pb-2 ">
          <Parallax className="lg:object-cover mt-6 h-40 object-cover  lg:w-full lg:h-60 lg:pb-0" bgImage={img2}>
          <h3 className="lg:pt-10  pt-4 text-2xl lg:tracking-wider text-gray-100 font-bold text-left lg:ml-20 ml-8">
                My
            </h3>
         <h1 className="pt-8  lg:text-7xl text-3xl lg:tracking-wide text-gray-100 font-bold ml-4 text-left lg:ml-20 ml-8">
           Timeline
          </h1>
          </Parallax>
           
           </div>

        <Parallax  className="lg:object-cover mt-0 h-500 object-contain  lg:w-full lg:h-500 lg:pb-8" bgImage={img2} >
            <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: 'gray-100' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={< ArrowCircleLeftIcon />}
  >
    <p className="text-gray-50">
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: 'gray-100' }}
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={< ArrowCircleRightIcon />}
  >
    
    <p className="text-gray-50">
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={< ArrowCircleLeftIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={< ArrowCircleRightIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<ArrowCircleDownIcon />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<ArrowCircleDownIcon />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<ArrowCircleDownIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={< ArrowCircleRightIcon />}
  />
</VerticalTimeline>     
         </Parallax>    

        </div>
        
     </div>
                 


       
      
        
    )
}

export default About

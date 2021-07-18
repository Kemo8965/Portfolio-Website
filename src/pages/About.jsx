import React, {useState,useEffect, Fragment} from 'react'
import { css, cx } from '@emotion/react'
import HashLoader from "react-spinners/HashLoader";

const override = css`
  display: block;
  margin: 0 auto;
  justify-items: center;
  top: 310px;
  border-color: red;
`;

const About = () => {
    const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    
    setTimeout(()=>{
    setLoading(false)
    }, 3000)

  },[])

    return (
        <div className=" h-full w-full filter hue-rotate-105 backdrop-filter backdrop-contrast-150 "  style={{ background: "url('../assets/images/hero4.jpg') fixed no-repeat center / cover "}}>
            
        
        <div className="font-bold pt-52 text-4xl text-black tracking-wider">
            <h1>About Me!</h1>
        </div>
       
      
        </div>
    )
}

export default About

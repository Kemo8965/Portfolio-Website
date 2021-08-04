import React, {useState,useEffect, Fragment} from 'react'
import { css, cx } from '@emotion/react'
import HashLoader from "react-spinners/HashLoader";
import { Parallax } from 'react-parallax';


const override = css`
  display: block;
  margin: 0 auto;
  justify-items: center;
  top: 310px;
  border-color: red;
`;

const img1=`${process.env.PUBLIC_URL + '/assets/images/cta.jpg'}`

const Contact = () => {
    const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    
    setTimeout(()=>{
    setLoading(false)
    }, 3000)

  },[])

    return (

      
           
            <Parallax className="lg:object-cover h-60 object-contain  lg:w-full lg:h-200 lg:pb-8" bgImage={img1} >
                 
            </Parallax>
        
       
       
        
    )
}

export default Contact

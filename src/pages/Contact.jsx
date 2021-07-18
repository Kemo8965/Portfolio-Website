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


const Contact = () => {
    const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    
    setTimeout(()=>{
    setLoading(false)
    }, 3000)

  },[])

    return (
        <div className="bg-red-100">
            {
        loading ?

        
        <HashLoader
       
        color={"#000000"}  
        loading={loading}
        css={override}  
        size={40} />
        :
        
        <div className="font-bold text-4xl text-black tracking-wider">
            <h1>Contact Me!</h1>
        </div>
       
      } 
        </div>
    )
}

export default Contact

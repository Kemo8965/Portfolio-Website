import React from 'react'
import { Parallax } from 'react-parallax'

const img1=`${process.env.PUBLIC_URL + '/assets/images/call2.jpg'}`

const CTA = () => {
    return (
       
           <Parallax className="lg:h-96 mt-0 lg:w-full h-60 text-left lg:object-cover filter grayscale object-contain  bg-gray-100 w-full filter " bgImage={img1} >
                    <h1 className="pt-28 text-2xl lg:ml-16 ml-8  text-gray-100 font-bold tracking-wide">Got a project?</h1>
                    <a href="tel:+260974928965"className="lg:text-6xl lg:ml-16 ml-8 text-4xl text-gray-100 font-bold tracking-wider hover:text-red-100">Let's get talking</a>
            </Parallax>
       
    )
}

export default CTA

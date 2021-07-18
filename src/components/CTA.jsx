import React from 'react'

const CTA = () => {
    return (
        <div>
            <div className="lg:h-96 h-60 text-left  bg-gray-100 w-full filter grayscale" style={{ background: "url('../assets/images/cta.jpg') fixed no-repeat center / cover "}}>
                    <h1 className="pt-28 text-2xl lg:ml-16 ml-8  text-gray-100 font-bold tracking-wide">Got a project?</h1>
                    <a href="" className="lg:text-6xl lg:ml-16 ml-8 text-4xl text-gray-100 font-bold tracking-wider">Let's get talking</a>
            </div>
        </div>
    )
}

export default CTA

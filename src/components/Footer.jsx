import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className=" lg:h-100 h-full bg-gray-50 filter hue-rotate-15 w-full  " style={{ background: "url('../assets/images/hero4.jpg') no-repeat center / cover "}}>
               <div className="grid lg:grid-cols-4 grid-cols-1 my-2 text-2xl font-bold lg:pt-16 pt-10 text-black">
                   <div className="lg:py-0 py-8">
                      <h1 className="lg:ml-14 mr-20 lg:text-left">Contact Information</h1>
                      <p className="font-semibold text-left text-gray-500 mx-8 text-lg lg:ml-14 mt-8 lg:mb-10 mb-4">
                      Feel free to reach out to me any time.
                       I prefer to talk over email, 
                       especially since we may be a few time zones away.
                      </p>

                    <div className="lg:ml-14 mr-12 mb-4">
                    E:<a className="font-semibold text-lg " href="mailto:kondwani1mwale@gmail.com">kondwani1mwale@gmail.com</a>
                    </div> 
                    

                     <div className="lg:ml-14 lg:mr-36 mr-44">
                     P:<a className="font-semibold lg:text-lg text-lg  " href="tel:+260974928965">0974 928 965</a>
                     </div>
                    
                   </div>

                   <div className="lg:py-0 py-8">
                      <h1  className="lg:ml-12 mr-36 lg:text-left">Latest Projects</h1> 
                      <ol className="font-semibold text-lg text-left mt-8 lg:ml-12 ml-8 ">
                          <li>Amaka Lodge</li>
                          <li>Mungi Company Limited</li>
                          <li>eVeX Inc</li>
                      </ol>
                   </div>

                   <div className="lg:py-0 py-8">
                      <h1  className="lg:ml-12 mr-24 lg:text-left"> Current Availability</h1>

                      <p className="font-semibold text-left text-gray-500 text-lg mt-8 mb-10 lg:ml-12 mx-8">
                      I usually work on several projects but I’ll be happy to discuss new opportunities.
                       Let’s get in touch!
                      </p>
                   </div>

                   <div className="lg:py-0 py-8">
                     <h1 className="lg:ml-20 mr-36 lg:text-left">Follow Me On</h1> 
                     <ol className="font-semibold text-lg text-left lg:ml-20 ml-10 mt-8  ">

                         <li>Instagram</li>
                         <li>LinkedIn</li>
                         <li>Behance</li>
                         <li>Twitter</li>
                    </ol> 
                   </div>

               </div>

               <div>
               <a href="/">
                <img className="w-28 h-28 lg:ml-14 ml-10 mt-8 object-cover rounded-full border border-gray-400" src={process.env.PUBLIC_URL + '/assets/images/k-logo.png'} alt="logo"/>
                </a>
               </div>
            </div>
        </div>
    )
}

export default Footer

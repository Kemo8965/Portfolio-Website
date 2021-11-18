import React from 'react'
import { Parallax } from 'react-parallax'


const img1=`${process.env.PUBLIC_URL + '/assets/images/hero10.jpg'}`
const CaseStudies = () => { 
    return (
        <Parallax className="lg:h-250 lg:w-full h-600 text-left lg:object-cover object-contain  bg-gray-100 w-full filter " bgImage={img1} >
            <div id="case" className="pb-8 ">
            <h3 className="lg:pt-10  pt-4 text-2xl lg:tracking-wider text-gray-800 font-bold text-left lg:ml-12 ml-8">
                Selected Projects
            </h3>
         <h1 className="pt-8  lg:text-7xl text-3xl lg:tracking-wide text-gray-800 font-bold ml-4 text-left lg:ml-12 ml-8">
           Case Studies
          </h1>
           </div>

           <div className="grid lg:grid-cols-3 grid-cols-1 lg:p-10 py-14 p-4">
              
              
              
               <div class="flex flex-wrap lg:h-100 h-full py-28 rounded-lg  bg-gray-100 sm:py-24 lg:py-16 pb-20 mb-20 lg:px-4 lg:mx-2 font-bold  text-3xl relative">
                            <img alt="gallery" className="w-full object-cover rounded-lg lg:h-100 h-full object-center block filter brightness-50 absolute inset-0 " src="../assets/images/MUNGI-LOGO.jpg" />
                            <div class="text-left ml-4 pt-24 lg:h-100 h-full relative z-10 w-full">
                                <a href="/mungiCompany" >
                            <h1 class=" text-3xl text-gray-100 font-bold title-font mb-4 ">Responsive Website Design</h1>
                            <p class="leading-relaxed text-gray-200">Mungi Company Limited.</p>
                            <a class="mt-3 text-indigo-100 inline-flex items-center hover:text-blue-300">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>

                            </a>
                            </div>
                </div>

                <div class="flex flex-wrap lg:h-100 rounded-lg h-full py-28 bg-gray-100 sm:py-24 lg:py-16 pb-20 lg:mt-0 mt-10 mb-20 lg:px-4 lg:mx-2 font-bold  text-3xl relative">
                            <img alt="gallery" class="w-full object-cover lg:h-100 rounded-lg h-full object-center block filter brightness-50 absolute inset-0 " src="../assets/images/webs.jpg" />
                            <div class="text-left ml-4 pt-24 lg:h-100 h-full relative z-10 w-full">
                                <a href="/amakaLodge">
                            <h1 class="text-3xl text-gray-100 font-bold title-font mb-4">Website Design</h1>
                            <p class="leading-relaxed text-gray-200">WEBS Electrical Engineering Limited</p>
                            <a class="mt-3 text-indigo-100 inline-flex items-center hover:text-blue-300">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            </a>
                            </div>
                </div>

                <div class="flex flex-wrap lg:h-100 rounded-lg h-full py-28 bg-gray-100 sm:py-24 lg:py-16 pb-20 lg:mt-0 mt-20 mb-10 lg:px-4 lg:mx-2 font-bold  text-3xl relative">
                            <img alt="gallery" class="w-full object-cover lg:h-100 rounded-lg h-full object-center block filter brightness-50 absolute inset-0 " src="../assets/images/hero10.jpg" />
                            <div class="text-left ml-4 pt-24 lg:h-100 h-full relative z-10 w-full">
                                <a href="/amakaLodge">
                            <h1 class="text-3xl text-gray-100 font-bold title-font mb-4">Client Management System</h1>
                            <p class="leading-relaxed text-gray-200">Summit Insurance</p>
                            <a class="mt-3 text-indigo-100 inline-flex items-center hover:text-blue-300">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            </a>
                            </div>
                </div>
            
               </div> 


        </Parallax>
    )
}

export default CaseStudies


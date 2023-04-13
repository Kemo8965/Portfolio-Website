import React from 'react'

const mungiCompany = () => {
    return (
        <div>
             
             <div className="text-sm pt-10 mb-3 text-left ml-8 font-semibold tracking-widest">
               <h1>CASE STUDY</h1>
            </div>

            <div className="grid h-100 lg:grid-cols-2 grid-cols-1">
           
           
                   
               <div class="flex flex-wrap lg:h-100 h-full py-20  bg-gray-100 sm:py-24 lg:py-16 pb-20 mb-20 lg:px-8 lg:ml-8 font-bold  text-3xl relative">
                            <img alt="gallery" className="w-full object-cover lg:h-100 h-full object-center block filter grayscale brightness-50 absolute inset-0 " src="../assets/images/lion.jpg" />
                            <div class="text-left ml-4 pt-10 lg:h-100 h-full relative  w-full">
                                <a href="#" >
                                    <p className="text-gray-300 text-xl tracking-wide">Client</p>
                            <h1 class=" text-2xl text-gray-100 font-bold title-font mb-4 ">Mungi Company Limited </h1>
                            <h2 className="text-gray-300 text-xl tracking-wide">My Role</h2>
                            <ol className="text-lg text-white">
                                <li>Creative Direction</li>
                                <li>UX/UI</li>
                                <li>Website Design</li>
                                <li>Website Hosting</li>
                                <li>Domain Name Registration</li>
                                <li>SSL Certificate setup</li>
                                <li>Custom Email setup</li>
                            </ol>
                             <a href='https://mungicompany.com' class="mt-3 text-indigo-100 inline-flex text-lg items-center hover:text-blue-300">View Website
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>

                            </a>
                            </div>
                </div>



                    <div className="flex flex-wrap lg:h-100 h-full py-28  bg-white sm:py-24 lg:py-16 pb-20 mb-20 lg:px-8 lg:mr-8   text-xl relative">
                        <div className="grid lg:grid-cols-1 grid-cols-1">
                            <div className="bg-white text-black text-left h-60">
                               
                        <h1 class=" text-4xl text-gray-900 font-bold title-font mb-4 ">Challenge</h1>
                        <ol className="text-black text-xl ">
                            <li className="py-2">
                            How can potential customers find a company offering services in
                            agriculture, construction,
                            logistics and automotive anti-theft equipment <span className="text-gray-700 font-bold ">?</span>
                            </li>

                            <li className="py-2">
                            How can the company increase 
                            its reach to capture new potential 
                            customers <span className="text-gray-700 font-bold ">?</span>
                            </li>

                            <li className="py-2">
                            Joining the right combinations of elements 
                            to convey the company identity and services to its target market.
                            </li>
                        </ol>
                            </div>

                            <div className="bg-white text-black text-left h-60">
                                <h2 className="text-4xl text-gray-900 font-bold title-font mb-4">Outcome</h2>
                                <p>
                                    A clean, responsive website which 
                                    displays the company identity, their values and
                                     all the services provided by the company
                                </p>
                            </div>

                        </div>
                    </div>

                    
            </div>

           
           
        </div>
    )
}

export default mungiCompany


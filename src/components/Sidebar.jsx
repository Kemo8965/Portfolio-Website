import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/rates' },
 
]

const Sidebar = () => {
    return (
        <div>
             <Popover>
            {({ open }) => (
              <>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                  <nav
                    className="relative flex  items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                         <a href="/">
                        <img className="w-20 h-20 lg:ml-14 mr-4  object-cover rounded-full border border-gray-400" src={process.env.PUBLIC_URL + '/assets/images/k-logo.png'} alt="logo"/>
                        </a>
                    
                        <div className="-mr-2 flex items-center md:hidden">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden flex flex-grow lg:block lg:ml-96 lg:pl-96 md:pr-4 md:space-x-14">
                      {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      ))}
                      
                    </div>
                  </nav>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute lg:z-0 z-10 top-0 inset-x-0  transition transform origin-top-right md:hidden"
                  >
                    <div className="rounded-lg shadow-md bg-white   h-200 ring-0 ring-black ring-opacity-5 overflow-hidden">
                      <div className="px-5 pt-0 flex items-center justify-between">
                        <div>
                        <a href="/">
                        <img className="w-20 h-20 mr-4  object-cover rounded-full border border-gray-400" src={process.env.PUBLIC_URL + '/assets/images/k-logo.png'} alt="logo"/>
                        </a>
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white text-xl rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:text-gray-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close main menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="px-2 pt-10 pb-3 space-y-16">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-3 rounded-md text-lg font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                     
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
    )
}

export default Sidebar

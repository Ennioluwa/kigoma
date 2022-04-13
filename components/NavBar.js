// import React, { useState } from 'react'

// const NavBar = () => {
//   const [isMobile, setIsMobile] = useState(false)
//   return (
//     <nav className=" transition-nav minh absolute top-0 left-0 w-full flex-grow overflow-hidden bg-gray-100 text-xl font-semibold opacity-80 shadow-md transition-all sm:flex sm:h-20">
//       <ul className=" container mx-auto flex w-full items-center p-3 lg:gap-16">
//         <li className=" py-3 shadow">Logo</li>
//         <div className=" hidden sm:contents ">
//           <li className=" ml-auto cursor-pointer p-1 sm:p-4 ">ROOMS</li>
//           <li className="cursor-pointer p-1 sm:p-4">FACILITIES</li>
//           <li className="cursor-pointer p-1 sm:p-4">GALLERY</li>
//           <li className="cursor-pointer p-1 sm:p-4">ABOUT US</li>
//         </div>
//         <li
//           className=" ml-auto sm:hidden"
//           onClick={() => setIsMobile(!isMobile)}
//         >
//           dot
//         </li>
//       </ul>
//       <ul className=" z-100 block h-full bg-gray-400 text-center text-black transition-all sm:-z-10 sm:hidden sm:h-0  ">
//         <li className=" ml-auto w-full cursor-pointer p-4 ">ROOMS</li>
//         <li className="w-full cursor-pointer p-4">FACILITIES</li>
//         <li className="w-full cursor-pointer p-4">GALLERY</li>
//         <li className="w-full cursor-pointer p-4">ABOUT US</li>
//       </ul>
//     </nav>
//   )
// }

// export default NavBar
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Transition } from '@headlessui/react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <nav className=" fixed top-0 left-0 right-0 z-10 w-full shadow-lg">
        <div className="flex w-full items-center justify-between bg-gray-100 opacity-80">
          <div className="flex h-20 w-full items-center">
            <div className="mx-10 flex w-full items-center justify-between ">
              <div className=" flex flex-shrink-0 items-center justify-center">
                <h1 className=" cursor-pointer text-lg font-bold">
                  Ko<span className=" text-blue-500">gama</span>
                </h1>
              </div>
              <div className="hidden md:block">
                <Link
                  activeClass="rooms"
                  to="rooms"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className=" cursor-pointer px-3 py-2 font-semibold text-blue-600 hover:font-black"
                >
                  Rooms
                </Link>
                <Link
                  activeClass="about"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className=" cursor-pointer px-3 py-2 font-semibold text-blue-600 hover:font-black"
                >
                  Facilities
                </Link>
                <Link
                  activeClass="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className=" cursor-pointer px-3 py-2 font-semibold text-blue-600 hover:font-black"
                >
                  Gallery
                </Link>
                <Link
                  activeClass="services"
                  to="services"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className=" cursor-pointer px-3 py-2 font-semibold text-blue-600 hover:font-black"
                >
                  Contact
                </Link>
                <Link
                  activeClass="contact"
                  to="contact"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className=" cursor-pointer px-3 py-2 font-semibold text-blue-600 hover:font-black"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
          <div className=" mr-10 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md bg-blue-600 p-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800 "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {!isOpen ? 'open' : 'close'}
            </button>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition  ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition  ease-in duration-75 transform"
          leaveFrom="opacity-0 scale-95"
          leaveTo="opacity-100 scale-100"
        >
          {(ref) => (
            <div className=" id=mobile-menu md:hidden">
              <div className="bg-white px-2 py-2">
                <Link
                  href="/home"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block cursor-pointer rounded-md py-2 px-3 text-base font-medium text-black hover:bg-blue-600 hover:text-white"
                >
                  Rooms
                </Link>
                <Link
                  href="/home"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block cursor-pointer rounded-md py-2 px-3 text-base font-medium text-black hover:bg-blue-600 hover:text-white"
                >
                  Facilities
                </Link>
                <Link
                  href="/home"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block cursor-pointer rounded-md py-2 px-3 text-base font-medium text-black hover:bg-blue-600 hover:text-white"
                >
                  Gallery
                </Link>
                <Link
                  href="/home"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block cursor-pointer rounded-md py-2 px-3 text-base font-medium text-black hover:bg-blue-600 hover:text-white"
                >
                  Contact
                </Link>
                <Link
                  href="/home"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block cursor-pointer rounded-md py-2 px-3 text-base font-medium text-black hover:bg-blue-600 hover:text-white"
                >
                  About
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default Nav

import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Transition } from '@headlessui/react'
import { FaGripLines, FaGripLinesVertical } from 'react-icons/fa'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <nav className=" fixed top-0 left-0 right-0 z-[50000] w-full shadow-lg">
        <div className="flex w-full items-center justify-between bg-gray-100 ">
          <div className="flex h-20 w-full items-center">
            <div className="mx-10 flex w-full items-center justify-between ">
              <div className=" flex flex-shrink-0 items-center justify-center">
                <h1 className=" cursor-pointer text-2xl font-bold">
                  Ki<span className=" text-blue-500">goma</span>
                </h1>
              </div>
              <div className="hidden md:block">
                <Link
                  activeClass="active"
                  to="rooms"
                  smooth={true}
                  spy={true}
                  offset={-90}
                  duration={500}
                  className=" cursor-pointer px-3 py-2 font-semibold text-blue-600 hover:font-black"
                >
                  Rooms
                </Link>
                <Link
                  activeClass="active"
                  to="facilities"
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className=" cursor-pointer px-3 py-2 font-semibold text-blue-600 hover:font-black"
                >
                  Facilities
                </Link>
                <Link
                  activeClass="active"
                  to="gallery"
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className=" cursor-pointer px-3 py-2 font-semibold text-blue-600 hover:font-black"
                >
                  Gallery
                </Link>
                <Link
                  activeClass="active"
                  to="message"
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className=" cursor-pointer px-3 py-2 font-semibold text-blue-600 hover:font-black"
                >
                  Message
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className=" cursor-pointer px-3 py-2 font-semibold text-blue-600 hover:font-black"
                >
                  Contact Us
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
              {!isOpen ? <FaGripLines /> : <FaGripLinesVertical />}
            </button>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition  ease-out duration-200 transform"
          enterFrom="opacity-0 scale-90"
          enterTo="opacity-100 scale-100"
          leave="transition  ease-in duration-400 transform"
          leaveFrom="opacity-0 scale-90"
          leaveTo="opacity-100 scale-100"
        >
          {(ref) => (
            <div className=" id=mobile-menu md:hidden">
              <div className="bg-white px-2 py-2">
                <Link
                  href="#rooms"
                  activeClass="active"
                  to="rooms"
                  smooth={true}
                  offset={-90}
                  onClick={() => setIsOpen(false)}
                  duration={500}
                  className="block cursor-pointer rounded-md py-2 px-3 text-base font-medium text-black hover:bg-blue-600 hover:text-white"
                >
                  Rooms
                </Link>
                <Link
                  href="/facilities"
                  activeClass="active"
                  to="facilities"
                  onClick={() => setIsOpen(false)}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className="block cursor-pointer rounded-md py-2 px-3 text-base font-medium text-black hover:bg-blue-600 hover:text-white"
                >
                  Facilities
                </Link>
                <Link
                  href="/gallery"
                  activeClass="active"
                  to="gallery"
                  onClick={() => setIsOpen(false)}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className="block cursor-pointer rounded-md py-2 px-3 text-base font-medium text-black hover:bg-blue-600 hover:text-white"
                >
                  Gallery
                </Link>
                <Link
                  href="/message"
                  activeClass="active"
                  to="message"
                  onClick={() => setIsOpen(false)}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className="block cursor-pointer rounded-md py-2 px-3 text-base font-medium text-black hover:bg-blue-600 hover:text-white"
                >
                  Message
                </Link>
                <Link
                  href="/contact"
                  activeClass="active"
                  onClick={() => setIsOpen(false)}
                  to="contact"
                  smooth={true}
                  offset={-90}
                  duration={500}
                  className="block cursor-pointer rounded-md py-2 px-3 text-base font-medium text-black hover:bg-blue-600 hover:text-white"
                >
                  Contact Us
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

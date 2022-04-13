import React from 'react'
import { Element } from 'react-scroll'
const Rooms = () => {
  return (
    <Element name="rooms">
      <div
        className="container mx-auto my-10 grid grid-cols-1 gap-10 p-5 sm:p-10 md:grid-cols-2 lg:gap-20 "
        id="rooms"
      >
        <div className=" col-span-1 mx-auto flex max-w-xl flex-col justify-center">
          <h3 className=" mb-10 text-4xl font-semibold">Rooms & Suites</h3>
          <p className=" mb-6">
            A holistic approach to luxury living, the Kigoma offers 297 curated
            rooms & suites that ensure guests would never want or need to leave.
          </p>
          <p className=" mb-10">
            Guests can customize their luxury stay with a selection of exquisite
            room offerings, including seven distinct suite categories featuring
            private and open floor layouts as well as outdoor terraces and city
            and garden view balcony options.
          </p>
          <div className=" flex flex-col justify-between gap-6 sm:flex-row">
            <button className=" rounded-sm border border-black px-6 py-4 text-xs font-semibold uppercase xl:w-56">
              View rooms & suites
            </button>
            <button className=" rounded-sm bg-orange-500 px-6 py-4 text-xs font-semibold uppercase text-white sm:w-48 xl:w-56 ">
              book now
            </button>
          </div>
        </div>
        <div className=" col-span-1 mx-auto max-w-xl">
          <img src="/pic.jpg" alt="room 1" className=" h-96 w-full" />
          <div className=" mt-5 grid grid-cols-2 gap-4">
            <img src="/pic.jpg" alt="room 2" className=" col-span-1 w-full" />
            <img src="/pic.jpg" alt="room 3" className=" col-span-1 w-full" />
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Rooms

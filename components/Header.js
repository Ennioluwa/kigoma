import React from 'react'

const Header = () => {
  return (
    <div className=" header flex h-64 w-full flex-col items-center justify-center bg-transparent text-white">
      <h3 className=" text-2xl font-bold">Welcome to </h3>
      <h1 className=" border-b-4 border-white px-4 py-2 text-6xl font-bold">
        KIGOMA
      </h1>
      <h4 className=" mb-10 mt-4 text-2xl ">ENJOY YOUR STAY</h4>
      <button className=" cursor-pointer rounded bg-orange-500 px-6 py-2 uppercase">
        Make reservations
      </button>
    </div>
  )
}

export default Header

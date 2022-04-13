import React from 'react'

const Card = ({ name, desc, price, img }) => {
  return (
    <div className=" col-span-1 mx-auto max-w-sm rounded p-5 shadow-md md:p-0 md:shadow-none lg:rounded-md xl:p-10 xl:shadow-lg">
      <img src={img} alt="offer" className=" mb-5 h-56" />
      <h4 className=" mb-5 text-lg font-medium text-black">{name}</h4>
      <p className=" mb-5 text-gray-500">{desc}</p>
      <div className="flex w-full items-center justify-between">
        <span className=" font-medium text-black">{price}</span>
        <button className="rounded-sm bg-orange-500 p-2 text-white">
          Book
        </button>
      </div>
    </div>
  )
}

export default Card

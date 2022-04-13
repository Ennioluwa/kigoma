import React from 'react'
import Card from './Card'

const Offerings = () => {
  return (
    <div
      className=" container mx-auto max-w-screen-2xl p-5 sm:p-10 lg:p-20"
      id="facilities"
    >
      <h3 className=" col-span-1 mb-20 text-4xl font-semibold md:col-span-3">
        Our popular offerings
      </h3>
      <div className=" mx-auto grid max-w-md grid-cols-1 gap-10  md:mx-0  md:max-w-full md:grid-cols-3 xl:gap-20">
        <Card
          name="Garden premier"
          desc="Pleasant room, classic style king size bed, carpeted, wooden or tiled floors with a choice of pool or city view"
          price="From # 40,000 / night"
          img="/pic3.jpg"
        />
        <Card
          name="Family Suite"
          desc="Pleasant room, classic style king size bed, carpeted, wooden or tiled floors with a choice of pool or city view"
          price="From # 40,000 / night"
          img="/pic2.jpg"
        />
        <Card
          name="Governor's Suite"
          desc="Pleasant room, classic style king size bed, carpeted, wooden or tiled floors with a choice of pool or city view"
          price="From # 40,000 / night"
          img="/pic4.jpg"
        />
      </div>
    </div>
  )
}

export default Offerings

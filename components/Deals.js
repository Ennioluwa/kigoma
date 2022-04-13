import React from 'react'

const Deals = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-20 p-5 sm:p-10 md:grid-cols-2">
      <div className=" col-span-1 mx-auto flex w-full max-w-xl flex-col gap-6 p-0">
        <h3 className=" mb-4 text-4xl font-semibold">Be in the know.</h3>
        <h6 className=" text-xs font-bold">
          GET THE LATEST INFO ON OUR BEST DEALS, OFFERS AND PROMOTIONS.
        </h6>
        <input
          type="text"
          placeholder="NAME"
          className=" w-full rounded bg-orange-50 px-4 py-2"
        />
        <input
          type="text"
          placeholder="EMAIL ADDRESS"
          className=" rounded bg-orange-50 px-4 py-2"
        />
        <div className="">
          <input type="checkbox" name="agree" id="agree" className=" mr-4" />
          <label htmlFor="agree" className=" text-xs font-bold">
            I agree to get the latest info about Kigoma
          </label>
        </div>

        <button className="self-start rounded-sm bg-orange-500 py-2 px-4 text-sm font-medium uppercase text-white">
          Get email updates
        </button>
      </div>
      <div className=" col-span-1 mx-auto flex max-w-xl flex-col gap-2 p-0">
        <p className="">
          Perched on the edge of the Wiki Hills, Kigoma commands breathtakng
          views down the valley that borders the Yankari Game Reserve. Enjoy
          exclusive game viewing thrilling night game drives, bush during
          amazing Nigerian culture and old-fashioned safari luxury.
        </p>
        <h5 className="text-2xl font-semibold">Address</h5>
        <p className=" mb-2">Wikki Camp, Yankari Reserve, Bauchi</p>
        <h5 className="text-2xl font-semibold">Phone</h5>
        <p className=" mb-2">+2348031024720</p>
        <h5 className="text-2xl font-semibold">Email</h5>
        <p className=" font-semibold">hello@kigoma.com</p>
      </div>
    </div>
  )
}

export default Deals

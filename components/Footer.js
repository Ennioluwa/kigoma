import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=" container mx-auto grid grid-cols-1 gap-20 p-2 sm:p-10 md:grid-cols-2">
      <div className=" col-span-1 mx-auto flex w-full max-w-xl items-center justify-start">
        <img
          src="/pic3.jpg"
          alt="footer img"
          className="mr-6 h-24 w-24 rounded-full"
        />
        <div className="flex flex-col gap-6">
          <h3 className="  text-4xl font-semibold">KIGOMA HOTELS</h3>
          <p>All rights reserved.</p>
        </div>
      </div>
      <div className=" col-span-1 mx-auto flex w-full max-w-xl items-center justify-between font-medium">
        <ul className="flex flex-col gap-4 ">
          <li>About</li>
          <li>Accessibility</li>
          <li>Awards</li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li>About</li>
          <li>Accessibility</li>
          <li>Awards</li>
        </ul>
        <ul className="flex flex-col justify-start gap-5 sm:flex-row">
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

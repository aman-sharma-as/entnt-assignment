import React from 'react'
import {FaHome, FaUser, FaRegCalendarAlt } from 'react-icons/fa';
import { BiSupport } from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="Navbar flex flex-col justify-between w-[15%] h-[100vh] px-6 py-5 bg-accent-light">
        <div className="text-2xl font-bold text-hotpink-dark">
          Dashboard
        </div>
        <ul className="menu-bar text-xl flex flex-col">
          <li className='flex items-center py-2 gap-2 hover:text-purple-light transition-all'>
            <FaHome/>
            <a href="/">Home</a>
          </li>
          <li className='flex items-center py-2 gap-2 hover:text-purple-light transition-all'>
            <FaUser/>
            <a href="/">Client Details</a>
          </li>
          <li className='flex items-center py-2 gap-2 hover:text-purple-light transition-all'>
            <FaRegCalendarAlt/>
            <a href="/">Calendar</a>
          </li>
          <li className='flex items-center py-2 gap-2 hover:text-purple-light transition-all'>
            <BiSupport/>
            <a href="/">Support</a>
          </li>
        </ul>
        <div className="flex items-end h-[35%]">
          <div className="flex items-center gap-x-2 font-semibold hover:text-yellow-dark transition-all">
          <a href="/">Sign Out </a>
          <RiLogoutCircleRLine/>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
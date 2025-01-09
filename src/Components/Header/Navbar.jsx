import React from 'react'
import './nav.css'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='nav w-full h-[60px] px-[35px] flex items-center justify-between'>
            <div className="flex gap-[20px] items-center">
                <img src="images/profile_image.svg" alt="Huzaifa Ansari" className='h-[50px] w-[50px] rounded-full' />
                <p className='myName'>HUZAIFA ANSARI</p>
            </div>
            <div className="lists">
                <ul className='flex gap-[27px] text-[16px]'>
                    <li><NavLink to="/" className={({ isActive }) => `${isActive ? "navActive" : ""} `}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => `${isActive ? "navActive" : ""}`}>About</NavLink></li>
                    <li><NavLink to="/services" className={({ isActive }) => `${isActive ? "navActive" : ""}`}>Services</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => `${isActive ? "navActive" : ""}`}>Contact Us</NavLink></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar

import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className="mt-[50px] py-1 border-t-[1px] border-black w-full flex items-center justify-center flex-col gap-[10px]">
            <div className="profileFooterImg flex gap-[10px] items-center">
                <img src="images/profile_image.svg" className='rounded-full h-[35px] w-[35px]' alt="" />
                <p>HUZAIFA ANSARI</p>
            </div>
            <div className="listsFooter">
                <ul className='flex gap-[15px]'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Footer

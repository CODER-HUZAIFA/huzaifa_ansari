import React from 'react'
import './nav.css'
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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#" className='soon '>Soon</a></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar

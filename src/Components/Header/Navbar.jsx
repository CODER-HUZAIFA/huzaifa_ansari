import React, { useState } from 'react'
import './nav.css'
import './NavResponsive.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [onMobile, setOnMobile] = useState(false);
    const [flag, setFlag] = useState(0)
    const onClickMenu = () => {
        if (flag == 0) {
            setOnMobile(true)
            setFlag(1)
        } else {
            setOnMobile(false)
            setFlag(0)
        }
    };

    return (
        <>
            <nav className={`${onMobile ? "navMobile" : "nav"} h-[60px] w-full px-[30px] flex sticky top-[4px] items-center justify-around`}>
                <div className="navProfile w-fit flex items-center justify-between">
                    <div className="flex w-fit gap-[20px] items-center">
                        <img src="images/profile_image.svg" id='huzaifa' alt="Huzaifa Ansari" className='h-[50px] w-[50px] rounded-full' />
                        <p className='myName'>HUZAIFA ANSARI</p>
                    </div>
                    <div className="menu">
                        <img src="images/menu.svg" className='hemburgMenu ml-[10px] w-[25px] h-[25px]' alt="" onClick={() => {
                                onClickMenu();
                            }}
                        />
                    </div>
                </div>
                <div className="lists w-fit">
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

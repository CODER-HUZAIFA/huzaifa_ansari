import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
        <div className="mt-[30px] w-full flex items-center justify-center flex-col gap-[10px]">
            <div className="profileFooterImg flex gap-[10px] items-center">
                <img src="images/profile_image.svg" className='rounded-full h-[35px] w-[35px]' alt="" />
                <p>HUZAIFA ANSARI</p>
            </div>
            <div className="listsFooter">
                <ul className='flex gap-[15px]'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Footer

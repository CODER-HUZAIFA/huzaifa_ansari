import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ imageURL, title, description }) => {
    return (
        <>
            <div className="serviceCard flex flex-col items-center w-[250px] h-[320px] border border-black">
                <div className="cardImage w-full p-[5px] border border-b-black">
                    <img src="images/services/web.svg" alt="" />
                </div>
                <div className="flex flex-col items-center mt-[5px]">
                    <p className='cardTitle mb-[5px]'>Web Development</p>
                    <p className='cardDescription'>
                        Hello, this service is for website deve
                        opment for business and personal use.
                        Click on purchase button.
                    </p>
                    <Link to="/contact">
                        <button className='cardBtn px-2 pb-[5px] mt-[15px] pt-[6px] rounded-[5px]'>Purchase</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ServiceCard

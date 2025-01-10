import React from 'react'
import './Services.css'
import ServiceCard from './ServiceCard'
import './ServiceResponsive.css'

const Services = () => {
  return (
    <>
      <div className="servicePage px-[100px] mt-[84px]">
        <div className="serviceTxt w-full">
          <p className='serviceHeading mb-[30px]'>🚀 Transform Your Ideas into Reality with My Expert Services!</p>
          <p className='serviceContent'>Looking to elevate your business with a professional online presence? I’ve got you covered! 🌐 I specialize in building stunning, responsive websites tailored to your brand's unique needs, ensuring your business stands out in the digital world. From server management to creating robust backend systems, I provide end-to-end solutions that are secure, scalable, and efficient. With my expertise in modern technologies, I’m here to help you streamline your operations and bring your vision to life. Let’s work together to create something extraordinary that drives growth and success for your business! 💼✨</p>
        </div>
        <div className="w-full mt-[50px]">
          <div className="services flex gap-[15px]">
            <img src="images/arrow.svg" alt="" />
            <p>Services</p>
          </div>
          <div className="ml-[10px] mt-[15px]">
            <ServiceCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Services

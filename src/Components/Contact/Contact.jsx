import React, { useState } from 'react'
import './Contact.css'
import './ContactResponsive.css'
import Profile from '../Hero/Intro/Profile'

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(false);
  const [status, setStatus] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setStatus(true);

    e.preventDefault();
    e.target.formSubmit.innerHTML = "Submitting..."
    let url = 'https://script.google.com/macros/s/AKfycbz5hmlFv6dCOWjfDhYHHuaFNyCMNP5KvospVh-HkXUw9tnA9Q9IocIIyVS_x06h5IEMDg/exec'
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData)
    }).then((res) => res.text()).then((res) => {
      e.target.formSubmit.innerHTML = "Submit"
      formData.name = "",
        formData.email = "",
        formData.phone = "",
        formData.message = ""

      setSubmitStatus(true);
      setTimeout(() => {
        setSubmitStatus(false)
      }, 5000);

    })

  };

  return (
    <>
      <div className="w-full h-full flex justify-around mt-[84px]">
        <div className={`${status ? "z-[-100] bg-[#a4a4a44f]" : "bg-[#dedede]"}  p-6 rounded-lg w-[400px]`}>
          <h2 className="text-center text-xl font-semibold mb-4">Contact Us</h2>
          <p className='text-sm w-full h-[15px] text-green-500 status'>{submitStatus ? "Data Saved Successfully" : ""}</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ff4400] focus:border-[#ff4400]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ff4400] focus:border-[#ff4400]"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1 font-medium">
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                pattern="[6-9][0-9]{9}"
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ff4400] focus:border-[#ff4400]"
              />
              <small className="text-gray-600 block mt-1">
                Format: 10 digits starting with 6, 7, 8, or 9
              </small>
            </div>
            <div>
              <label htmlFor="service" className="block mb-1 font-medium">
                Your Service:
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ff4400] focus:border-[#ff4400]"
              >
                <option value="" disabled>
                  Select an inquiry type
                </option>
                <option value="Web Service">Web Service</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ff4400] focus:border-[#ff4400] h-24 resize-none"
              ></textarea>
              <p className="text-sm ml-[5px] text-blue-600">I will reply in 2 hours</p>
            </div>
            <button
              type="submit"
              id='formSubmit'
              name='formSubmit'
              className="w-full font-medium bg-[#ff4400] text-white p-2 rounded hover:bg-[#bf4e25]"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="contactProfile">
          <Profile />
        </div>
      </div>
    </>
  )
}

export default Contact

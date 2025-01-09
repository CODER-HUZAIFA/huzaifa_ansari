import React from 'react'
import Profile from '../Hero/Intro/Profile'
import './About.css'

const About = () => {
  return (
    <>
      <div className="w-full mt-[84px] flex justify-around">
        <div className="">
          <div className="mb-[20px]">
            <p className='aboutMyName'>Meet - <span>HUZAIFA ANSARI</span></p>
            <p className='aboutMySelf'>Hi! I’m Huzaifa Ansari, a 16-year-old software engineer with a passion for creating, innovating, and pushing the boundaries of technology. 💻</p>
            <p className='aboutMySelf'>I specialize as a Full-Stack Developer, mastering both Backend 🌐 and Frontend 🎨 development. With expertise in Node.js, JavaScript ✨, Python 🐍, Java ☕, and Flutter 📱, I bring ideas to life through code.</p>
          </div>
          <div className="mb-[20px]">
            <p className='aboutMySelfHeading'>🎮 My Skills</p>
            <p className='aboutMySelf'>Beyond apps and websites, I also dive into the exciting world of game development using Unity Engine 🕹️, creating interactive and fun gaming experiences.</p>
          </div>
          <div className="mb-[20px]">
            <p className='aboutMySelfHeading'>🌱 Always Learning</p>
            <p className='aboutMySelf'>My curiosity drives me to constantly learn and grow. I’m exploring the fascinating realm of Artificial Intelligence 🤖, understanding how to build AI models that can shape the future of technology.</p>
          </div>
          <div className="mb-[20px]">
            <p className='aboutMySelfHeading'>🌍 My Vision</p>
            <p className='aboutMySelf'>My dream of building an IT startup at a young age—a platform where people can easily find jobs and unlock their true potential. By blending creativity, technology, and purpose, I aim to make a meaningful impact on the world.</p>
            <br />
            <p className='aboutMySelf'>Let’s collaborate, innovate, and build something extraordinary together! 🚀</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[20px] h-fit">
          <div className=""><Profile /></div>
          <div className="quote flex flex-col items-center mt-[50px]">
            <p className='quoteTxt'>Fueled by passion, driven by dreams,</p>
            <p className='quoteTxt'>I build a future with code that gleams,</p>
            <p className='quoteTxt'>Where tech empowers and brightly streams,</p>
            <p className='quoteTxt'>Turning ideas into reality’s beams.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

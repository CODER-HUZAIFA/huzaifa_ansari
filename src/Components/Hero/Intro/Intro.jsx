import React from 'react'
import Profile from './Profile'
import './intro.css'
const Intro = () => {
  return (
    <>
        <div className="w-full mt-[84px] flex justify-around items-center">
            <div className="introduction">
                <p className='myNameHero'>HUZAIFA ANSARI</p>
                <p className='subHeading'>🚀 A Young Visionary in Tech! </p>
                <p className='content'>At just 16 years old, I’m Huzaifa Ansari, a passionate software engineer with a mission to create impactful digital experiences. 💻 Armed with skills in React ⚛️, Flutter 📱, Node.js 🌐, Java ☕, Python 🐍, and JavaScript ✨, I bring ideas to life through code.
                Every line of code I write isn’t just work—it’s a step toward building something extraordinary. Let’s collaborate 🤝, innovate 💡, and transform 🚀 the tech landscape together!</p>
            </div>
            <div className="">
                <Profile />
            </div>
        </div>
    </>
  )
}

export default Intro

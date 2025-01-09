import React from 'react'
import './app.css'
import Navbar from './Components/Header/Navbar'
import Intro from './Components/Hero/Intro/Intro'
import ProjectHandle from './Components/Hero/Projects/ProjectHandle'
import TechnolgiesHandle from './Components/Hero/Technologoies/TechnolgiesHandle'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <main className='p-1'>
        <Navbar />
        <Intro />
        <ProjectHandle />
        <TechnolgiesHandle />
        <Footer />
      </main>
    </>
  )
}

export default App

import React from 'react'
import Intro from './Intro/Intro'
import ProjectHandle from './Projects/ProjectHandle'
import TechnolgiesHandle from './Technologoies/TechnolgiesHandle'
import './HomeResponsive.css'

const Home = () => {
  return (
    <>
        <main className='MainHome'>
          <Intro />
          <ProjectHandle />
          <TechnolgiesHandle />
        </main>
    </>
  )
}

export default Home

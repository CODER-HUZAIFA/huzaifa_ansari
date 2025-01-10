import React from 'react'
import './app.css'
import { Footer, Navbar } from "./Components"
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <main className='p-[4px] relative'>
        <Navbar />
          <Outlet />
        <Footer />
      </main>
    </>
  )
}

export default App

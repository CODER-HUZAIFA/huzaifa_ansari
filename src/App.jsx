import React from 'react'
import './app.css'
import { Footer, Navbar } from "./Components"
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <main className='p-1 w-full min-h-full'>
        <Navbar />
          <Outlet />
        <Footer />
      </main>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Button from './components/button'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Register from './components/usestate'
import Component1 from './components/useeffect'

function App() {

  return (
    <>
    <Navbar/>
     <>
      {/* <h1> Hello world </h1> */}
      {/* <Button name={"Workshop"} />  */}
      <Register />
      
      {/* <Component1 /> */}
      <Footer/>
     </>
     
    
    </>
  )
}

export default App

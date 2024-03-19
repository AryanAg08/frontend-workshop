import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Register from './components/usestate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <>
      <h1> Hello world </h1>
      <Register />
     </>
     
     <Footer/>
    </>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Home/Navbar'
import Homeflex from './Home/Navbar/Homeflex'
import Grid1 from './Home/Grid1'
import Grid2 from './Home/Grid2'
import Footer from './Home/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Homeflex/>
      <Grid1/>
      <Grid2/>
      <Footer/>
    </>
  )
}

export default App

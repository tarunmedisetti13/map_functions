import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects'


function App() {
  return (<>
    <Navbar />
    <Routes className='w-full h-[80vh]'>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  </>);
}

export default App

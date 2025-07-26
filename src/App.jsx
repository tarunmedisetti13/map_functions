import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Main } from './components/Main'

function App() {
  const arr = ["React", "Angular", "Node", "Express", "React"]

  return (
    <>
      <div>
        {arr.map(
          (val, index) => {
            return <li key={index}>{val}</li>
          }
        )}
      </div>
      <div className='flex  gap-10 items-center '>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App

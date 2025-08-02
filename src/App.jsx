import React from 'react'
import Form from './Form'
import { useState } from 'react'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState('false');
  return (
    <>
      <ComponentA />
      <ComponentB /></>

  )
}

export default App

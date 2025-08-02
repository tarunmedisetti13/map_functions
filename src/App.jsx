import React from 'react'
import Form from './Form'
import { useState } from 'react'
import ComponentB from './components/ComponentB'
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState('false');
  return (
    <ComponentB />
  )
}

export default App

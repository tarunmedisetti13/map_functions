import React from 'react'
import Form from './Form'
import Crender from './components.jsx/Crender'
import Lists from './components.jsx/Lists'
import { useState } from 'react'
import ComponentA from './components.jsx/ComponentA'
import ComponentB from './components.jsx/ComponentB'
import ComponentC from './components.jsx/ComponentC'
import ComponentD from './components.jsx/ComponentD'
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState('false');
  return (
    <div>
      <ComponentA>
        <ComponentB>
          <ComponentC>
            <ComponentD />
          </ComponentC>
        </ComponentB>
      </ComponentA>
    </div>
  )
}

export default App

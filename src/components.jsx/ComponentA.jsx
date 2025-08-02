import React, { useState } from 'react'
import ComponentB from './ComponentB'
import { createContext } from 'react'
export const myContext = createContext();
const ComponentA = () => {

    const [user, setUser] = useState('Tarun');
    return (
        <div className='box'>


            <myContext.Provider value={user}>
                <h1 className='font-semibold'>ComponentA</h1>
                Hello {user}
                <ComponentB user={user} />
            </myContext.Provider>

        </div>
    )
}

export default ComponentA

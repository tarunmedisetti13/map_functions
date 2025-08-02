import { useContext } from "react"
import React from 'react'
import { myContext } from './ComponentA';
const ComponentD = () => {
    const value = useContext(myContext);
    return (
        <div className='box'>
            <h1 className="font-semibold">ComponentD</h1>
            Bye{value}
        </div>
    )
}

export default ComponentD

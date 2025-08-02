import React from 'react'
import ComponentD from './ComponentD'
const ComponentC = () => {
    return (
        <div className='box'>
            <h2 className='font-semibold'>ComponentC</h2>
            <ComponentD />
        </div>
    )
}

export default ComponentC

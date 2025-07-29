import React, { useState } from 'react'

const Timer = () => {
    const [counter, setCounter] = useState(0);
    return (

        <div className='font-bold w-100 h-100  text-center flex flex-col'>
            <h1>Counter game</h1>
            <p className='text-2xl'>{counter}</p>
            <div className='flex gap-3 justify-between'>
                <button className='border cursor-pointer p-2 rounded-xs text-2xl bg-blue-400' onClick={() => setCounter(counter + 1)}>Increment</button>
                <button className='border cursor-pointer p-2 rounded-xs text-2xl  bg-gradient-to-r from-blue-500 to-cyan-400' onClick={() => setCounter(0)}>Reset</button>
                <button className='border cursor-pointer p-2 rounded-xs text-2xl bg-red-500' onClick={() => setCounter(counter - 1)}>Decrement</button>
            </div>
        </div>
    )
}

export default Timer

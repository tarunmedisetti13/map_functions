import React, { useState, useEffect, useRef } from 'react';

export default function App() {
    const [name, setName] = useState('');
    const renderCount = useRef(1);

    useEffect(() => {
        console.log('Render with useRef');
        renderCount.current += 1;
    });

    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)} className='border' />
            <div>useRef Render count: {renderCount.current}</div>
        </>
    );
}

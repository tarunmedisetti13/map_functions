import React, { useState, useEffect } from 'react';

export default function App() {
    const [name, setName] = useState('');
    const [renderCount, setRenderCount] = useState(1);

    useEffect(() => {
        console.log('Render with useState');
        setRenderCount(prev => prev + 1);
    }, [name]);

    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)} className='border' />
            <div>useState Render count: {renderCount}</div>
        </>
    );
}

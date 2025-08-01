import React from 'react';

function Crender({ isLoggedIn, setIsLoggedIn }) {
    const toggleLogin = () => {
        setIsLoggedIn(prev => !prev); // Toggle true/false
    };

    return (
        <div className='text-center'>
            <h2>{isLoggedIn ? 'You are logged in ✅' : 'Please log in ❌'}</h2>
            <button
                className='bg-blue-500 text-white px-4 py-2 rounded mt-4'
                onClick={toggleLogin}
            >
                Toggle Login
            </button>
        </div>
    );
}

export default Crender;

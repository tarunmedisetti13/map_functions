import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='w-full flex items-center border h-12 justify-center'>
            <ul className='border flex justify-center gap-10 h-10 border rounded-xl items-center'>
                <Link to='/'> <li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/projects'> <li>Projects</li></Link>
                <Link to='/contact'>
                    <li>Contact</li></Link>
            </ul>
        </div>
    )
}

export default Navbar

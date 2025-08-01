import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`name:${formData.name}
            email:${formData.email}`);
    }
    return (
        <form onSubmit={handleSubmit} className='grid h-50 place-items-center '>
            <input type="text" name='name' value={formData.name} onChange={handleChange} className='border' />
            <input type="email" name='email' value={formData.email} onChange={handleChange} className='border' />
            <button type='submit' className='border bg-blue-400 cursor-pointer'>Submit</button>
        </form>
    )
}

export default Form

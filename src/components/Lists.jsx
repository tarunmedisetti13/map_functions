import React from 'react'

const Lists = () => {
    const list = [
        { id: 1, name: 'Tarun', student: false },
        { id: 2, name: 'Ashok', student: true },
        { id: 3, name: 'Ravi', student: false }
    ]
    return (
        <div>
            <ul className='grid place-items-center'>
                {list.map((l, index) => (
                    <li key={l.id}>{l.name}  student: <span className='font-semibold'>{String(l.student)}</span></li>
                ))}
            </ul>
        </div>
    )
}

export default Lists

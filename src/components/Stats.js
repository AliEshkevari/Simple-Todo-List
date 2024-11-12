import React from 'react'

export default function Stats({ totalTodos, completedTodos }) {
    const percentage = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0

    return (
        <div className='stats-container'>
            <p>{totalTodos} items Added. You have done {percentage}% of them; Come on!</p>
        </div>
    )
}